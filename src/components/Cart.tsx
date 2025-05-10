
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, CreditCard, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// Интерфейс для элемента корзины
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  material: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const navigate = useNavigate();
  
  // Временные данные для корзины
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Клатч Milano',
      price: 5990,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870',
      color: 'Бежевый',
      material: 'Натуральная кожа'
    },
    {
      id: '2',
      name: 'Сумка Paris',
      price: 8990,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
      color: 'Черный',
      material: 'Натуральная кожа'
    }
  ]);
  
  const [promoCode, setPromoCode] = useState('');
  const [isPromoValid, setIsPromoValid] = useState<boolean | null>(null);
  
  // Функции для работы с корзиной
  const updateQuantity = (id: string, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Расчеты для корзины
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 500;
  const discount = isPromoValid ? Math.round(subtotal * 0.10) : 0; // 10% скидка при применении промокода
  const total = subtotal - discount + shipping;
  
  // Обработка промокода
  const applyPromoCode = () => {
    // Проверка промокода (в реальном приложении здесь будет запрос к API)
    const isValid = promoCode.toUpperCase() === 'WELCOME15';
    setIsPromoValid(isValid);
  };
  
  // Переход к оформлению заказа
  const goToCheckout = () => {
    onClose();
    navigate('/checkout');
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center text-xl">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Корзина
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({cartItems.length} {cartItems.length === 1 ? 'товар' : cartItems.length >= 2 && cartItems.length <= 4 ? 'товара' : 'товаров'})
            </span>
          </SheetTitle>
        </SheetHeader>
        
        {cartItems.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center py-10">
            <ShoppingBag className="h-16 w-16 text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-medium">Ваша корзина пуста</h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Добавьте товары в корзину, чтобы продолжить покупки
            </p>
            <Button 
              className="mt-6" 
              onClick={() => {
                onClose();
                navigate('/catalog');
              }}
            >
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col">
            <div className="flex-1 overflow-y-auto py-4">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-4 flex items-start border-b pb-4">
                  <div className="h-20 w-20 overflow-hidden rounded-md">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.color} • {item.material}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 text-muted-foreground"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-md p-0"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7 rounded-md p-0"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <span className="font-medium">
                        {(item.price * item.quantity).toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <div className="mb-4">
                <div className="relative">
                  <Input
                    placeholder="Промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="pr-20"
                  />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute right-1 top-1"
                    onClick={applyPromoCode}
                    disabled={!promoCode}
                  >
                    Применить
                  </Button>
                </div>
                
                {isPromoValid !== null && (
                  <p className={`mt-1 text-xs ${isPromoValid ? 'text-green-600' : 'text-red-600'}`}>
                    {isPromoValid 
                      ? 'Промокод применен! Скидка 10%' 
                      : 'Недействительный промокод'
                    }
                  </p>
                )}
              </div>
              
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сумма:</span>
                  <span>{subtotal.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Скидка:</span>
                  <span>{discount > 0 ? `-${discount.toLocaleString()} ₽` : '0 ₽'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка:</span>
                  <span>{shipping > 0 ? `${shipping.toLocaleString()} ₽` : 'Бесплатно'}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Итого:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
              </div>
              
              <SheetFooter className="mt-6 flex-col gap-2 sm:flex-col">
                <Button 
                  className="w-full" 
                  onClick={goToCheckout}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Оформить заказ
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={clearCart}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Очистить корзину
                </Button>
              </SheetFooter>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
