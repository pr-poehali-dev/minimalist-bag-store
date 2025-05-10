
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Mail, CreditCard, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Временные данные для примера
const giftCardOptions = [
  { id: '1', value: 3000, image: 'https://images.unsplash.com/photo-1583844815637-c02be36f6abb?auto=format&fit=crop&q=80&w=1349' },
  { id: '2', value: 5000, image: 'https://images.unsplash.com/photo-1636355679244-d1288d7a3b5c?auto=format&fit=crop&q=80&w=1170' },
  { id: '3', value: 10000, image: 'https://images.unsplash.com/photo-1636356746906-e7aa64e7a782?auto=format&fit=crop&q=80&w=1170' },
  { id: '4', value: 20000, image: 'https://images.unsplash.com/photo-1584542369540-a180c3a538c3?auto=format&fit=crop&q=80&w=1397' },
];

const GiftCards = () => {
  const [selectedValue, setSelectedValue] = useState('3000');
  const [customValue, setCustomValue] = useState('');
  const [activeTab, setActiveTab] = useState('design');
  const [selectedDesign, setSelectedDesign] = useState('1');
  
  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (value === 'custom') {
      setActiveTab('value');
    }
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString() + ' ₽';
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container text-center">
            <h1 className="animate-fade-in font-playfair text-4xl font-bold leading-tight md:text-5xl">
              Подарочные сертификаты
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Идеальный подарок для тех, кто ценит качество и стиль – подарочные сертификаты нашего магазина
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="giftcard" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="giftcard">Купить сертификат</TabsTrigger>
                  <TabsTrigger value="check">Проверить сертификат</TabsTrigger>
                </TabsList>
                
                <TabsContent value="giftcard" className="mt-6">
                  <div className="rounded-lg border p-6">
                    <div className="mb-6 flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Gift className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="ml-3 font-playfair text-2xl font-semibold">Создайте подарочный сертификат</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div>
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                          <TabsList className="mb-4 grid w-full grid-cols-3">
                            <TabsTrigger value="value">Номинал</TabsTrigger>
                            <TabsTrigger value="design">Дизайн</TabsTrigger>
                            <TabsTrigger value="info">Получатель</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="value">
                            <div className="space-y-4">
                              <div>
                                <Label>Выберите номинал сертификата</Label>
                                <RadioGroup 
                                  value={selectedValue} 
                                  onValueChange={handleValueChange}
                                  className="mt-2 space-y-2"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="3000" id="value-3000" />
                                    <Label htmlFor="value-3000">3 000 ₽</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="5000" id="value-5000" />
                                    <Label htmlFor="value-5000">5 000 ₽</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="10000" id="value-10000" />
                                    <Label htmlFor="value-10000">10 000 ₽</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="20000" id="value-20000" />
                                    <Label htmlFor="value-20000">20 000 ₽</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="custom" id="value-custom" />
                                    <Label htmlFor="value-custom">Другая сумма</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              
                              {selectedValue === 'custom' && (
                                <div>
                                  <Label htmlFor="custom-value">Укажите сумму (от 1000 до 50000 ₽)</Label>
                                  <Input
                                    id="custom-value"
                                    type="number"
                                    min="1000"
                                    max="50000"
                                    placeholder="Например: 7500"
                                    value={customValue}
                                    onChange={(e) => setCustomValue(e.target.value)}
                                    className="mt-1"
                                  />
                                </div>
                              )}
                              
                              <Button 
                                onClick={() => setActiveTab('design')}
                                className="w-full"
                              >
                                Продолжить
                              </Button>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="design">
                            <div className="space-y-4">
                              <Label>Выберите дизайн сертификата</Label>
                              <div className="grid grid-cols-2 gap-3">
                                {giftCardOptions.map((card) => (
                                  <Card 
                                    key={card.id}
                                    className={`cursor-pointer overflow-hidden transition-all hover:opacity-90 ${selectedDesign === card.id ? 'ring-2 ring-primary' : 'border'}`}
                                    onClick={() => setSelectedDesign(card.id)}
                                  >
                                    <CardContent className="p-0">
                                      <AspectRatio ratio={3/2}>
                                        <img 
                                          src={card.image} 
                                          alt={`Дизайн сертификата ${card.id}`}
                                          className="h-full w-full object-cover"
                                        />
                                      </AspectRatio>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                              
                              <Button 
                                onClick={() => setActiveTab('info')}
                                className="w-full"
                              >
                                Продолжить
                              </Button>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="info">
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="recipient-name">Имя получателя</Label>
                                <Input id="recipient-name" placeholder="Введите имя" className="mt-1" />
                              </div>
                              
                              <div>
                                <Label htmlFor="recipient-email">Email получателя</Label>
                                <Input id="recipient-email" type="email" placeholder="example@mail.com" className="mt-1" />
                              </div>
                              
                              <div>
                                <Label htmlFor="message">Поздравительная надпись</Label>
                                <Textarea 
                                  id="message" 
                                  placeholder="Введите текст поздравления или пожелания" 
                                  className="mt-1"
                                />
                              </div>
                              
                              <div>
                                <Label htmlFor="sender-name">Ваше имя (отправитель)</Label>
                                <Input id="sender-name" placeholder="Введите ваше имя" className="mt-1" />
                              </div>
                              
                              <Button className="w-full">Перейти к оплате</Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-lg font-medium">Предпросмотр сертификата</h3>
                          <p className="text-sm text-muted-foreground">Так будет выглядеть ваш подарочный сертификат</p>
                        </div>
                        
                        <div className="relative flex-1">
                          <div className="rounded-lg border bg-background p-4 shadow-sm">
                            <div className="overflow-hidden rounded-md">
                              <AspectRatio ratio={16/9}>
                                <img 
                                  src={giftCardOptions.find(card => card.id === selectedDesign)?.image || giftCardOptions[0].image} 
                                  alt="Превью сертификата"
                                  className="h-full w-full object-cover"
                                />
                              </AspectRatio>
                            </div>
                            
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Номинал:</span>
                                <span className="font-medium">
                                  {selectedValue === 'custom' 
                                    ? customValue ? `${parseInt(customValue).toLocaleString()} ₽` : 'Не указан' 
                                    : `${parseInt(selectedValue).toLocaleString()} ₽`}
                                </span>
                              </div>
                              <div className="h-[1px] bg-border" />
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Срок действия:</span>
                                <span className="font-medium">12 месяцев</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="check" className="mt-6">
                  <div className="rounded-lg border p-6">
                    <div className="mb-6 flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="ml-3 font-playfair text-2xl font-semibold">Проверить сертификат</h2>
                    </div>
                    
                    <div className="max-w-lg">
                      <p className="mb-4 text-muted-foreground">
                        Введите номер подарочного сертификата, чтобы проверить его статус и баланс.
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="certificate-number">Номер сертификата</Label>
                          <Input 
                            id="certificate-number" 
                            placeholder="Например: GIFT-1234-5678-9ABC" 
                            className="mt-1"
                          />
                        </div>
                        
                        <Button className="w-full">Проверить</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-cream py-16">
          <div className="container">
            <h2 className="mb-10 text-center font-playfair text-3xl font-semibold">Преимущества подарочных сертификатов</h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Идеальный подарок</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Сертификат – отличный подарок для тех, кто ценит качество и возможность самостоятельного выбора
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Отправка на email</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Сертификат может быть отправлен на электронную почту получателя с вашим персональным поздравлением
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Гибкий номинал</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Выберите сумму от 3 000 до 50 000 рублей или укажите любую другую в пределах этого диапазона
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center font-playfair text-3xl font-semibold">Как это работает</h2>
            
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-[1px] bg-border md:left-9"></div>
                
                <div className="mb-8 flex">
                  <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-background text-2xl font-semibold">1</div>
                  <div className="ml-6">
                    <h3 className="font-playfair text-xl font-medium">Выберите номинал и дизайн</h3>
                    <p className="mt-2 text-muted-foreground">
                      Выберите один из стандартных номиналов или укажите свою сумму. Затем подберите дизайн сертификата, 
                      который подойдет к вашему случаю.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8 flex">
                  <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-background text-2xl font-semibold">2</div>
                  <div className="ml-6">
                    <h3 className="font-playfair text-xl font-medium">Добавьте персональное сообщение</h3>
                    <p className="mt-2 text-muted-foreground">
                      Напишите поздравление или пожелание, которое будет отображаться в сертификате. 
                      Укажите имя получателя и ваше имя в качестве отправителя.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8 flex">
                  <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-background text-2xl font-semibold">3</div>
                  <div className="ml-6">
                    <h3 className="font-playfair text-xl font-medium">Оплатите и отправьте</h3>
                    <p className="mt-2 text-muted-foreground">
                      Оплатите сертификат удобным способом и выберите способ доставки: отправка на электронную почту, 
                      распечатка или доставка в красивом конверте.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-background text-2xl font-semibold">4</div>
                  <div className="ml-6">
                    <h3 className="font-playfair text-xl font-medium">Получатель выбирает подарок</h3>
                    <p className="mt-2 text-muted-foreground">
                      Получатель может использовать сертификат в течение 12 месяцев для покупки любых товаров на нашем сайте или 
                      в физическом магазине, просто указав номер сертификата при оформлении заказа.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-16">
          <div className="container">
            <h2 className="mb-10 text-center font-playfair text-3xl font-semibold">Часто задаваемые вопросы</h2>
            
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-medium">Какой срок действия подарочного сертификата?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Срок действия подарочного сертификата составляет 12 месяцев с момента покупки. 
                  Дата окончания действия указывается в сертификате.
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-medium">Можно ли использовать сертификат частями?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Да, если стоимость покупки меньше номинала сертификата, оставшаяся сумма сохраняется 
                  на счете сертификата и может быть использована для следующих покупок в течение срока действия.
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-medium">Что делать, если стоимость товара больше номинала сертификата?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Если стоимость выбранного товара превышает номинал сертификата, разницу можно доплатить 
                  любым удобным способом: наличными, банковской картой или онлайн-платежом.
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-medium">Можно ли вернуть или обменять подарочный сертификат?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  В соответствии с законодательством, подарочные сертификаты не подлежат возврату или обмену на денежные средства. 
                  Однако, если у вас возникли проблемы с использованием сертификата, обратитесь в нашу службу поддержки.
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-medium">Как проверить баланс подарочного сертификата?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Проверить баланс подарочного сертификата можно во вкладке "Проверить сертификат" на этой странице, 
                  указав номер сертификата, либо обратившись в службу поддержки по телефону.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="rounded-lg bg-primary/10 p-8 text-center md:p-12">
              <h2 className="font-playfair text-2xl font-semibold md:text-3xl">Подарите сертификат прямо сейчас</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Не знаете, что подарить? Подарочный сертификат — это идеальный выбор для любого случая. 
                Порадуйте своих близких возможностью выбрать именно то, что они хотят.
              </p>
              <Button size="lg" className="mt-6" asChild>
                <a href="#top">Купить сертификат</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GiftCards;
