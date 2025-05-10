
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

// Временные данные для примера
const featuredProducts = [
  {
    id: '1',
    name: 'Клатч Milano',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870',
    color: 'Бежевый',
    material: 'Натуральная кожа'
  },
  {
    id: '2',
    name: 'Сумка Paris',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
    color: 'Черный',
    material: 'Натуральная кожа'
  },
  {
    id: '3',
    name: 'Шопер London',
    price: 6990,
    image: 'https://images.unsplash.com/photo-1597633125184-4fd8bae3a6e6?auto=format&fit=crop&q=80&w=1170',
    color: 'Коричневый',
    material: 'Натуральная кожа'
  },
  {
    id: '4',
    name: 'Рюкзак Tokyo',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=1158',
    color: 'Серый',
    material: 'Экокожа'
  }
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-lavender">
          <div className="container flex flex-col items-center justify-between py-20 md:flex-row">
            <div className="mb-10 max-w-lg text-center md:mb-0 md:text-left">
              <h1 className="animate-fade-in font-playfair text-4xl font-bold leading-tight md:text-5xl">
                Изысканные сумки для вашего стиля
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Коллекция элегантных и практичных аксессуаров из натуральных материалов
              </p>
              <div className="mt-8 flex justify-center gap-4 md:justify-start">
                <Button asChild size="lg">
                  <Link to="/catalog">Смотреть каталог</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/about">О нас</Link>
                </Button>
              </div>
            </div>
            <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1564422170865-5d93b7f13e78?auto=format&fit=crop&q=80&w=1556"
                alt="Коллекция сумок"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-playfair text-3xl font-semibold md:text-4xl">О нашем магазине</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ELEGANCE — это магазин стильных и качественных сумок от ведущих российских и европейских производителей. 
                Мы работаем с 2015 года и гордимся безупречным качеством наших товаров и сервиса.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="rounded-lg p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lavender">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Высокое качество</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Тщательно отбираем производителей, чтобы предложить вам лучшее
                </p>
              </div>
              
              <div className="rounded-lg p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lavender">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Широкий ассортимент</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Более 500 моделей сумок различных стилей и назначений
                </p>
              </div>
              
              <div className="rounded-lg p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lavender">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Быстрая доставка</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Доставляем по всей России в течение 1-3 рабочих дней
                </p>
              </div>
              
              <div className="rounded-lg p-6 text-center shadow-sm hover-scale">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lavender">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-medium">Гарантия</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Предоставляем гарантию на все товары до 12 месяцев
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-cream py-16">
          <div className="container">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="font-playfair text-3xl font-semibold md:text-4xl">Популярные товары</h2>
                <p className="mt-2 text-muted-foreground">Самые популярные модели этого сезона</p>
              </div>
              <Link to="/catalog" className="group flex items-center text-sm font-medium">
                Весь каталог 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Sale Banner */}
        <section className="py-16">
          <div className="container">
            <div className="relative overflow-hidden rounded-lg bg-lavender p-8 md:p-12">
              <div className="relative z-10 max-w-md">
                <h2 className="font-playfair text-3xl font-semibold md:text-4xl">Сезонная распродажа</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Скидки до 50% на избранные модели сумок из весенней коллекции
                </p>
                <Button className="mt-6" asChild>
                  <Link to="/sales">Смотреть акции</Link>
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1559563458-c667ba5f5480?auto=format&fit=crop&q=80&w=1170"
                  alt="Распродажа сумок"
                  className="opacity-60"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gift Certificates */}
        <section className="bg-cream py-16">
          <div className="container">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              <div className="mb-8 max-w-md text-center md:mb-0 md:text-left">
                <h2 className="font-playfair text-3xl font-semibold md:text-4xl">Подарочные сертификаты</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Идеальный подарок для тех, кто ценит стиль и качество. Сертификаты доступны номиналом от 3000 до 20000 рублей.
                </p>
                <Button className="mt-6" asChild>
                  <Link to="/gift-cards">Приобрести сертификат</Link>
                </Button>
              </div>
              <div className="w-full max-w-sm overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1612599316791-451087e8f072?auto=format&fit=crop&q=80&w=1364"
                  alt="Подарочный сертификат"
                  className="h-auto w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-playfair text-3xl font-semibold md:text-4xl">Где нас найти</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Приглашаем вас посетить наш магазин в центре Москвы. Мы находимся в пешей доступности от метро Арбатская.
              </p>
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Карта местоположения"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347125737957!2d37.59829911594952!3d55.751970280555344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a472d10a213%3A0xfd77eeac2a29c9a3!2z0YPQuy4g0JDRgNCx0LDRgiwgMjQsINCc0L7RgdC60LLQsCwgMTE5MDAy!5e0!3m2!1sru!2sru!4v1683531337993!5m2!1sru!2sru"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
