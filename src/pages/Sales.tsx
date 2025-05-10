
import { Link } from 'react-router-dom';
import { Calendar, Tag, Clock, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Временные данные для примера
const saleProducts = [
  {
    id: '5',
    name: 'Клатч Vienna',
    price: 4990,
    oldPrice: 7990,
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=1742',
    color: 'Красный',
    material: 'Экокожа',
    discount: 38
  },
  {
    id: '6',
    name: 'Сумка Berlin',
    price: 7990,
    oldPrice: 9990,
    image: 'https://images.unsplash.com/photo-1574616302687-3a894c857175?auto=format&fit=crop&q=80&w=1545',
    color: 'Черный',
    material: 'Натуральная кожа',
    discount: 20
  },
  {
    id: '7',
    name: 'Шопер Rome',
    price: 5990,
    oldPrice: 7590,
    image: 'https://images.unsplash.com/photo-1548863227-3af567fc3b27?auto=format&fit=crop&q=80&w=1170',
    color: 'Коричневый',
    material: 'Натуральная кожа',
    discount: 21
  },
  {
    id: '8',
    name: 'Рюкзак Seoul',
    price: 6990,
    oldPrice: 8990,
    image: 'https://images.unsplash.com/photo-1571633411708-1043359a4bb3?auto=format&fit=crop&q=80&w=1374',
    color: 'Серый',
    material: 'Натуральная кожа',
    discount: 22
  }
];

const promotions = [
  {
    id: 'promo1',
    title: 'Дарим третью сумку в подарок',
    description: 'При покупке двух сумок из новой коллекции, третья сумка (наименьшая по стоимости) в подарок',
    validUntil: '30 июня 2025',
    icon: ShoppingBag,
    code: 'THIRD-FREE'
  },
  {
    id: 'promo2',
    title: 'Скидка 15% на первый заказ',
    description: 'Для новых клиентов – скидка 15% при первом заказе на нашем сайте по промокоду',
    validUntil: '31 декабря 2025',
    icon: Tag,
    code: 'WELCOME15'
  },
  {
    id: 'promo3',
    title: 'Бесплатная доставка по России',
    description: 'На все заказы от 8000 рублей бесплатная доставка в любой город России',
    validUntil: 'Бессрочно',
    icon: Calendar,
    code: 'FREE-SHIP'
  }
];

const specialOffers = [
  {
    id: 'special1',
    title: 'Коллекция SUMMER 2025',
    description: 'Скидки до 40% на летнюю коллекцию сумок из натуральной кожи и экокожи',
    validUntil: '31 августа 2025',
    image: 'https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&q=80&w=1464',
    discount: 40
  },
  {
    id: 'special2',
    title: 'Распродажа прошлых коллекций',
    description: 'Финальная распродажа моделей прошлых сезонов со скидками до 50%',
    validUntil: 'Пока товары есть в наличии',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
    discount: 50
  }
];

const Sales = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container text-center">
            <Badge className="mb-4 px-3 py-1 text-sm font-normal">Специальные предложения</Badge>
            <h1 className="animate-fade-in font-playfair text-4xl font-bold leading-tight md:text-5xl">
              Акции и скидки
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Выгодные предложения, сезонные распродажи и эксклюзивные промокоды для наших клиентов
            </p>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-8 font-playfair text-3xl font-semibold">Специальные предложения</h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {specialOffers.map(offer => (
                <div key={offer.id} className="group overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md">
                  <div className="relative">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                      -{offer.discount}%
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold">{offer.title}</h3>
                    <p className="mt-2 text-muted-foreground">{offer.description}</p>
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>Действует до: {offer.validUntil}</span>
                    </div>
                    <Button className="mt-4 w-full" asChild>
                      <Link to="/catalog">Смотреть товары</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sale Products */}
        <section className="bg-cream py-16">
          <div className="container">
            <h2 className="mb-8 font-playfair text-3xl font-semibold">Товары со скидкой</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {saleProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="font-medium" asChild>
                <Link to="/catalog">Посмотреть все товары со скидкой</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Promo Codes */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-8 font-playfair text-3xl font-semibold">Промокоды</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {promotions.map(promo => {
                const Icon = promo.icon;
                
                return (
                  <Card key={promo.id} className="transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-playfair">{promo.title}</CardTitle>
                      <CardDescription>{promo.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Действует до: {promo.validUntil}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full">
                        <div className="flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2">
                          <code className="font-mono font-medium">{promo.code}</code>
                          <Button variant="outline" size="sm">Скопировать</Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="bg-cream py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-playfair text-3xl font-semibold md:text-4xl">Программа лояльности</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Становитесь участником нашей программы лояльности и получайте эксклюзивные привилегии
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">5% кэшбэк баллами</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Возвращаем 5% от суммы каждой покупки баллами, которыми можно оплатить до 50% следующего заказа
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Скидка в день рождения</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Скидка 15% на любой заказ в течение недели до и после дня рождения
                </p>
              </div>
              
              <div className="rounded-lg border bg-background p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">VIP-привилегии</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ранний доступ к новым коллекциям, эксклюзивные скидки и приглашения на закрытые мероприятия
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/account">Присоединиться к программе</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center font-playfair text-3xl font-semibold">Часто задаваемые вопросы</h2>
              
              <Tabs defaultValue="discounts" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="discounts">Скидки</TabsTrigger>
                  <TabsTrigger value="promotions">Акции</TabsTrigger>
                  <TabsTrigger value="loyalty">Лояльность</TabsTrigger>
                </TabsList>
                <TabsContent value="discounts" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Как узнать о новых скидках и акциях?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Информация о новых акциях и скидках публикуется на нашем сайте в разделе "Акции и скидки", 
                      а также рассылается по электронной почте подписчикам. Чтобы не пропустить выгодные предложения, 
                      подпишитесь на нашу рассылку в разделе "Аккаунт".
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Можно ли сочетать несколько скидок?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Некоторые скидки и промокоды могут быть использованы совместно, но в большинстве случаев 
                      применяется только одна скидка или акция к заказу. Информация о возможности комбинирования 
                      указывается в описании каждой акции.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Как применить промокод?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Промокод можно ввести на странице оформления заказа в специальное поле. После проверки 
                      промокода скидка будет автоматически применена к вашему заказу.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="promotions" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Как долго действуют сезонные акции?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Продолжительность сезонных акций указывается в их описании. Обычно они действуют от нескольких 
                      недель до нескольких месяцев, в зависимости от типа акции и сезона.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Что такое "товар дня"?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      "Товар дня" - это специальное предложение, действующее в течение 24 часов, когда один 
                      определенный товар продается со значительной скидкой. Новый "товар дня" появляется каждый день в 10:00.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Распространяются ли акции на товары со скидкой?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      В большинстве случаев акции не распространяются на товары, которые уже продаются со скидкой. 
                      Однако, есть исключения, о которых мы сообщаем в описании конкретных акций.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="loyalty" className="mt-6 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Как стать участником программы лояльности?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Чтобы стать участником программы лояльности, достаточно зарегистрироваться на нашем сайте 
                      и сделать первую покупку. После этого вы автоматически становитесь участником базового уровня программы.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Как накапливаются и используются баллы?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      За каждую покупку вы получаете кэшбэк баллами в размере 5% от суммы заказа. Накопленными 
                      баллами можно оплатить до 50% стоимости следующих покупок (1 балл = 1 рубль).
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Есть ли уровни в программе лояльности?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Да, в нашей программе лояльности три уровня: Базовый, Серебряный и Золотой. Уровень зависит 
                      от суммы ваших покупок за календарный год. Чем выше уровень, тем больше привилегий и бонусов вы получаете.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sales;
