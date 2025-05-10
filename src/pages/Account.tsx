
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Package, CreditCard, Clock, User, LogOut, Heart, Settings, ShoppingBag } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Временные данные для демонстрации
const userData = {
  id: '12345',
  name: 'Анна Смирнова',
  email: 'anna@example.com',
  phone: '+7 (999) 123-45-67',
  avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=1588',
  bonusPoints: 1250,
  addresses: [
    {
      id: 1,
      type: 'Дом',
      address: 'ул. Ленина, 42, кв. 56',
      city: 'Москва',
      postalCode: '123456',
      isDefault: true
    },
    {
      id: 2,
      type: 'Работа',
      address: 'ул. Пушкина, 10, офис 305',
      city: 'Москва',
      postalCode: '123321',
      isDefault: false
    }
  ]
};

const orders = [
  {
    id: 'ORD-2023-1234',
    date: '25.04.2023',
    status: 'delivered',
    statusText: 'Доставлен',
    total: 12980,
    items: [
      {
        id: '1',
        name: 'Сумка Paris',
        price: 8990,
        color: 'Черный',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876'
      },
      {
        id: '3',
        name: 'Шопер London',
        price: 3990,
        color: 'Коричневый',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1597633125184-4fd8bae3a6e6?auto=format&fit=crop&q=80&w=1170'
      }
    ]
  },
  {
    id: 'ORD-2023-1111',
    date: '10.03.2023',
    status: 'delivered',
    statusText: 'Доставлен',
    total: 5990,
    items: [
      {
        id: '2',
        name: 'Клатч Milano',
        price: 5990,
        color: 'Бежевый',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870'
      }
    ]
  }
];

const wishlist = [
  {
    id: '4',
    name: 'Рюкзак Tokyo',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=1158',
    color: 'Серый',
    material: 'Экокожа'
  },
  {
    id: '5',
    name: 'Клатч Vienna',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=1742',
    color: 'Красный',
    material: 'Экокожа'
  }
];

const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-playfair text-2xl font-semibold">{userData.name}</h1>
              <p className="text-muted-foreground">{userData.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Sidebar */}
            <div>
              <div className="rounded-lg border p-4">
                <div className="mb-3 text-sm font-medium">Бонусные баллы</div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-medium">{userData.bonusPoints}</span>
                  <span className="text-muted-foreground">баллов</span>
                </div>
                <Button variant="outline" className="mt-3 w-full">Как использовать</Button>
              </div>
              
              <div className="mt-6 flex flex-col space-y-1">
                <Button 
                  variant="ghost" 
                  className={`justify-start ${activeTab === 'orders' ? 'bg-muted' : ''}`}
                  onClick={() => setActiveTab('orders')}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Мои заказы
                </Button>
                <Button 
                  variant="ghost" 
                  className={`justify-start ${activeTab === 'wishlist' ? 'bg-muted' : ''}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Избранное
                </Button>
                <Button 
                  variant="ghost" 
                  className={`justify-start ${activeTab === 'profile' ? 'bg-muted' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="mr-2 h-5 w-5" />
                  Профиль
                </Button>
                <Button 
                  variant="ghost" 
                  className={`justify-start ${activeTab === 'settings' ? 'bg-muted' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Настройки
                </Button>
                <Separator className="my-1" />
                <Button variant="ghost" className="justify-start text-red-500 hover:text-red-700">
                  <LogOut className="mr-2 h-5 w-5" />
                  Выйти
                </Button>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-3">
              {activeTab === 'orders' && (
                <div>
                  <h2 className="font-playfair text-xl font-semibold">История заказов</h2>
                  
                  {orders.length === 0 ? (
                    <div className="mt-4 rounded-lg border p-8 text-center">
                      <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">У вас пока нет заказов</h3>
                      <p className="mt-2 text-muted-foreground">
                        Посмотрите наш каталог и выберите что-нибудь для себя
                      </p>
                      <Button className="mt-4">Перейти в каталог</Button>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-6">
                      {orders.map(order => (
                        <Card key={order.id}>
                          <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                              <CardTitle>Заказ {order.id}</CardTitle>
                              <CardDescription>от {order.date}</CardDescription>
                            </div>
                            <Badge variant={order.status === 'delivered' ? 'outline' : 'default'}>
                              {order.statusText}
                            </Badge>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {order.items.map(item => (
                                <div key={item.id} className="flex items-center space-x-4">
                                  <div className="h-16 w-16 overflow-hidden rounded-md">
                                    <img 
                                      src={item.image} 
                                      alt={item.name} 
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      Цвет: {item.color}, Количество: {item.quantity}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">{item.price.toLocaleString()} ₽</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">Итого:</p>
                              <p className="font-medium">{order.total.toLocaleString()} ₽</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Повторить заказ</Button>
                              <Button size="sm">Подробнее</Button>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="font-playfair text-xl font-semibold">Избранное</h2>
                  
                  {wishlist.length === 0 ? (
                    <div className="mt-4 rounded-lg border p-8 text-center">
                      <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">Ваш список избранного пуст</h3>
                      <p className="mt-2 text-muted-foreground">
                        Добавляйте товары в избранное, чтобы вернуться к ним позже
                      </p>
                      <Button className="mt-4">Перейти в каталог</Button>
                    </div>
                  ) : (
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {wishlist.map(item => (
                        <Card key={item.id}>
                          <div className="flex overflow-hidden">
                            <div className="h-32 w-32 flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                              <div>
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {item.material}, {item.color}
                                </p>
                                <p className="mt-1 font-medium">{item.price.toLocaleString()} ₽</p>
                              </div>
                              <div className="flex justify-end space-x-2">
                                <Button variant="outline" size="sm">Удалить</Button>
                                <Button size="sm">В корзину</Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'profile' && (
                <div>
                  <h2 className="mb-4 font-playfair text-xl font-semibold">Личные данные</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" value={userData.name} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={userData.email} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" value={userData.phone} className="mt-1" />
                      </div>
                    </div>
                    
                    <Button>Сохранить изменения</Button>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-playfair text-lg font-medium">Адреса доставки</h3>
                      
                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {userData.addresses.map(address => (
                          <div key={address.id} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">{address.type}</div>
                              {address.isDefault && (
                                <Badge variant="outline">По умолчанию</Badge>
                              )}
                            </div>
                            <div className="mt-2 text-sm">
                              <p>{address.address}</p>
                              <p>{address.city}, {address.postalCode}</p>
                            </div>
                            <div className="mt-3 flex space-x-2">
                              <Button variant="outline" size="sm">Изменить</Button>
                              {!address.isDefault && (
                                <Button variant="outline" size="sm">Сделать основным</Button>
                              )}
                            </div>
                          </div>
                        ))}
                        
                        <div className="flex min-h-[150px] items-center justify-center rounded-lg border border-dashed">
                          <Button variant="ghost">+ Добавить новый адрес</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="mb-4 font-playfair text-xl font-semibold">Настройки</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium">Уведомления</h3>
                      <p className="text-sm text-muted-foreground">Управление рассылками и уведомлениями</p>
                      
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email-рассылка</p>
                            <p className="text-sm text-muted-foreground">Новости и акции магазина</p>
                          </div>
                          <Button variant="outline">Подписаться</Button>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">SMS-уведомления</p>
                            <p className="text-sm text-muted-foreground">Статус заказа и доставки</p>
                          </div>
                          <Button variant="outline">Включены</Button>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium">Безопасность</h3>
                      <p className="text-sm text-muted-foreground">Настройка пароля и безопасности аккаунта</p>
                      
                      <div className="mt-4">
                        <Button variant="outline">Изменить пароль</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium">Управление аккаунтом</h3>
                      <div className="mt-4">
                        <Button variant="destructive">Удалить аккаунт</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
