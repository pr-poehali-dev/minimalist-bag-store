
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, CheckCircle2, CreditCard, Truck, Gift, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Временные данные для демонстрации
const cartItems = [
  {
    id: "1",
    name: "Клатч Milano",
    price: 5990,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870",
    color: "Бежевый",
    material: "Натуральная кожа",
  },
  {
    id: "2",
    name: "Сумка Paris",
    price: 8990,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876",
    color: "Черный",
    material: "Натуральная кожа",
  },
];

const Checkout = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Состояние для форм
  const [deliveryMethod, setDeliveryMethod] = useState("courier");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isGift, setIsGift] = useState(false);
  
  // Расчет итогов
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = deliveryMethod === "pickup" ? 0 : 300;
  const total = subtotal + shipping;
  
  // Обработка отправки заказа
  const completeOrder = () => {
    // Здесь будет логика для отправки заказа на сервер
    setOrderComplete(true);
  };
  
  // Если заказ завершен, показываем страницу подтверждения
  if (orderComplete) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        <main className="flex-1 py-12">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              
              <h1 className="font-playfair text-3xl font-semibold">Заказ успешно оформлен!</h1>
              <p className="mt-4 text-muted-foreground">
                Спасибо за ваш заказ. Мы отправили подтверждение на вашу электронную почту.
                Номер вашего заказа: <span className="font-medium">ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
              </p>
              
              <div className="mt-8 rounded-lg border p-6">
                <h2 className="text-lg font-medium">Детали заказа</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Способ доставки:</span>
                    <span>
                      {deliveryMethod === "courier" ? "Курьерская доставка" : "Самовывоз из магазина"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Способ оплаты:</span>
                    <span>
                      {paymentMethod === "card" 
                        ? "Банковская карта" 
                        : paymentMethod === "cash" 
                          ? "Наличными при получении" 
                          : "Онлайн-оплата"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Итого:</span>
                    <span className="font-medium">{total.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-x-4">
                <Button variant="outline" asChild>
                  <Link to="/account">Мои заказы</Link>
                </Button>
                <Button asChild>
                  <Link to="/catalog">Продолжить покупки</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-6 flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Главная
            </Link>
            <ChevronRight className="mx-1 h-4 w-4" />
            <Link to="/catalog" className="hover:text-foreground">
              Каталог
            </Link>
            <ChevronRight className="mx-1 h-4 w-4" />
            <span className="text-foreground">Оформление заказа</span>
          </div>
          
          <h1 className="mb-8 font-playfair text-3xl font-semibold">
            Оформление заказа
          </h1>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              {/* Шаги оформления */}
              <div className="mb-8">
                <div className="relative flex w-full justify-between">
                  {/* Шаг 1 */}
                  <div className="flex-1 text-center">
                    <div
                      className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        activeStep >= 1
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                    >
                      1
                    </div>
                    <div className="mt-2 text-sm font-medium">Доставка</div>
                  </div>
                  
                  {/* Линия между шагами */}
                  <div
                    className={`absolute top-5 left-0 right-0 h-0.5 -z-10 mx-auto w-2/3 ${
                      activeStep >= 2 ? "bg-primary" : "bg-border"
                    }`}
                  ></div>
                  
                  {/* Шаг 2 */}
                  <div className="flex-1 text-center">
                    <div
                      className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        activeStep >= 2
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                    >
                      2
                    </div>
                    <div className="mt-2 text-sm font-medium">Оплата</div>
                  </div>
                  
                  {/* Линия между шагами */}
                  <div
                    className={`absolute top-5 left-0 right-0 h-0.5 -z-10 mx-auto w-2/3 ${
                      activeStep >= 3 ? "bg-primary" : "bg-border"
                    }`}
                  ></div>
                  
                  {/* Шаг 3 */}
                  <div className="flex-1 text-center">
                    <div
                      className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        activeStep >= 3
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border"
                      }`}
                    >
                      3
                    </div>
                    <div className="mt-2 text-sm font-medium">Подтверждение</div>
                  </div>
                </div>
              </div>
              
              {/* Шаг 1: Информация о доставке */}
              {activeStep === 1 && (
                <div className="rounded-lg border p-6">
                  <h2 className="mb-4 flex items-center text-xl font-medium">
                    <Truck className="mr-2 h-5 w-5" />
                    Информация о доставке
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="firstName">Имя</Label>
                        <Input id="firstName" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Фамилия</Label>
                        <Input id="lastName" className="mt-1" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="mt-1" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" className="mt-1" required />
                    </div>
                    
                    <div>
                      <div className="mb-2 font-medium">Способ доставки</div>
                      <RadioGroup 
                        value={deliveryMethod} 
                        onValueChange={setDeliveryMethod}
                      >
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="courier" id="courier" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="courier" className="font-medium">
                              Курьерская доставка
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Доставка в течение 1-3 рабочих дней
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex items-start space-x-2">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="pickup" className="font-medium">
                              Самовывоз из магазина
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Можно забрать в течение 1-2 рабочих дней
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {deliveryMethod === "courier" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="address">Адрес</Label>
                          <Input id="address" className="mt-1" required />
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div>
                            <Label htmlFor="city">Город</Label>
                            <Input id="city" className="mt-1" required />
                          </div>
                          <div>
                            <Label htmlFor="region">Область</Label>
                            <Input id="region" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="postalCode">Почтовый индекс</Label>
                            <Input id="postalCode" className="mt-1" required />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {deliveryMethod === "pickup" && (
                      <div>
                        <Label htmlFor="pickupLocation">Выберите пункт выдачи</Label>
                        <select 
                          id="pickupLocation"
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          required
                        >
                          <option value="">Выберите магазин</option>
                          <option value="store1">Москва, ул. Арбат, 24</option>
                          <option value="store2">Москва, ул. Тверская, 8</option>
                          <option value="store3">Санкт-Петербург, Невский пр., 114</option>
                        </select>
                      </div>
                    )}
                    
                    <div>
                      <Label htmlFor="comment">Комментарий к заказу (необязательно)</Label>
                      <Textarea 
                        id="comment" 
                        placeholder="Оставьте комментарий или дополнительную информацию для доставки" 
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="giftWrap" 
                        checked={isGift}
                        onCheckedChange={(checked) => setIsGift(!!checked)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="giftWrap" className="font-medium">
                          Подарочная упаковка (+300 ₽)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Упаковать товар в подарочную коробку с атласной лентой
                        </p>
                      </div>
                    </div>
                    
                    <Button onClick={() => setActiveStep(2)} className="w-full">
                      Продолжить
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Шаг 2: Оплата */}
              {activeStep === 2 && (
                <div className="rounded-lg border p-6">
                  <h2 className="mb-4 flex items-center text-xl font-medium">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Способ опла

ты
                  </h2>
                  
                  <div className="space-y-6">
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="space-y-3"
                    >
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="card" id="card" className="mt-1" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="card" className="font-medium">
                              Банковская карта
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Оплата банковской картой Visa, MasterCard, МИР
                            </p>
                            
                            {paymentMethod === "card" && (
                              <div className="mt-4 space-y-4">
                                <div>
                                  <Label htmlFor="cardNumber">Номер карты</Label>
                                  <Input 
                                    id="cardNumber" 
                                    placeholder="1234 5678 9012 3456" 
                                    className="mt-1" 
                                  />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="expiry">Срок действия</Label>
                                    <Input 
                                      id="expiry" 
                                      placeholder="ММ/ГГ" 
                                      className="mt-1" 
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="cvv">CVV/CVC</Label>
                                    <Input 
                                      id="cvv" 
                                      type="password" 
                                      maxLength={3} 
                                      placeholder="123" 
                                      className="mt-1" 
                                    />
                                  </div>
                                </div>
                                
                                <div>
                                  <Label htmlFor="cardName">Имя держателя карты</Label>
                                  <Input 
                                    id="cardName" 
                                    placeholder="IVAN IVANOV" 
                                    className="mt-1 uppercase" 
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="online" id="online" className="mt-1" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="online" className="font-medium">
                              Онлайн-оплата
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Оплата через электронные кошельки или мобильные приложения банков
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="cash" id="cash" className="mt-1" />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="cash" className="font-medium">
                              Наличными при получении
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Оплата наличными курьеру или в пункте выдачи
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" onClick={() => setActiveStep(1)} className="flex-1">
                        Назад
                      </Button>
                      <Button onClick={() => setActiveStep(3)} className="flex-1">
                        Продолжить
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Шаг 3: Подтверждение заказа */}
              {activeStep === 3 && (
                <div className="rounded-lg border p-6">
                  <h2 className="mb-4 flex items-center text-xl font-medium">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Подтверждение заказа
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="rounded-lg border p-4">
                      <h3 className="flex items-center text-lg font-medium">
                        <MapPin className="mr-2 h-4 w-4" />
                        Информация о доставке
                      </h3>
                      <div className="mt-2 text-sm">
                        <p><span className="text-muted-foreground">Способ доставки:</span> {deliveryMethod === "courier" ? "Курьерская доставка" : "Самовывоз из магазина"}</p>
                        <p className="mt-1"><span className="text-muted-foreground">Адрес:</span> Москва, ул. Примерная, д. 123, кв. 45</p>
                        <p className="mt-1"><span className="text-muted-foreground">Получатель:</span> Иван Иванов</p>
                        <p className="mt-1"><span className="text-muted-foreground">Телефон:</span> +7 (999) 123-45-67</p>
                      </div>
                      <Button variant="link" className="mt-2 h-auto p-0 text-sm" onClick={() => setActiveStep(1)}>
                        Изменить
                      </Button>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h3 className="flex items-center text-lg font-medium">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Способ оплаты
                      </h3>
                      <div className="mt-2 text-sm">
                        <p><span className="text-muted-foreground">Метод:</span> {
                          paymentMethod === "card" 
                            ? "Банковская карта" 
                            : paymentMethod === "online" 
                              ? "Онлайн-оплата" 
                              : "Наличными при получении"
                        }</p>
                        {paymentMethod === "card" && (
                          <p className="mt-1"><span className="text-muted-foreground">Карта:</span> **** **** **** 3456</p>
                        )}
                      </div>
                      <Button variant="link" className="mt-2 h-auto p-0 text-sm" onClick={() => setActiveStep(2)}>
                        Изменить
                      </Button>
                    </div>
                    
                    {isGift && (
                      <div className="rounded-lg border p-4">
                        <h3 className="flex items-center text-lg font-medium">
                          <Gift className="mr-2 h-4 w-4" />
                          Подарочная упаковка
                        </h3>
                        <p className="mt-2 text-sm">
                          Товары будут упакованы в подарочную коробку с атласной лентой
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-medium">Товары в заказе</h3>
                        <div className="mt-4 space-y-4">
                          {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center">
                              <div className="h-16 w-16 overflow-hidden rounded-md">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="ml-4 flex-1">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-muted-foreground">{item.color}, {item.material}</div>
                              </div>
                              <div className="ml-4 text-right">
                                <div>{item.price.toLocaleString()} ₽</div>
                                <div className="text-sm text-muted-foreground">Кол-во: {item.quantity}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" onClick={() => setActiveStep(2)} className="flex-1">
                        Назад
                      </Button>
                      <Button onClick={completeOrder} className="flex-1">
                        Подтвердить заказ
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Сайдбар с итогами */}
            <div>
              <div className="sticky top-24 rounded-lg border p-6">
                <h2 className="font-medium">Ваш заказ</h2>
                
                <div className="mt-4 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 overflow-hidden rounded-md">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">{item.name}</div>
                          <div className="text-xs text-muted-foreground">Кол-во: {item.quantity}</div>
                        </div>
                      </div>
                      <div>{item.price.toLocaleString()} ₽</div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сумма:</span>
                    <span>{subtotal.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Доставка:</span>
                    <span>{shipping > 0 ? `${shipping.toLocaleString()} ₽` : "Бесплатно"}</span>
                  </div>
                  {isGift && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Упаковка:</span>
                      <span>300 ₽</span>
                    </div>
                  )}
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Итого:</span>
                    <span>{(total + (isGift ? 300 : 0)).toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
