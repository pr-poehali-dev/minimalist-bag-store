
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ChevronRight, Star, ShoppingBag, Share, Truck, Package, RefreshCw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Временные данные о товаре
const productData = {
  id: '1',
  name: 'Сумка Paris',
  price: 8990,
  oldPrice: 10990,
  discount: 18,
  description: 'Элегантная сумка из натуральной кожи с тиснением. Удобная форма и регулируемый ремень делают её идеальной для повседневного использования. Внутри одно основное отделение, карман на молнии и два кармашка для мелочей.',
  features: [
    'Натуральная кожа высшего качества',
    'Металлическая фурнитура с золотистым покрытием',
    'Регулируемый плечевой ремень',
    'Внутренний карман на молнии',
    'Два кармана для мелочей',
    'Подкладка из прочного текстиля'
  ],
  colors: [
    { name: 'Черный', code: '#000000', selected: true },
    { name: 'Коричневый', code: '#5D4037', selected: false },
    { name: 'Бежевый', code: '#D7CCC8', selected: false }
  ],
  material: 'Натуральная кожа',
  dimensions: '30 × 25 × 12 см',
  weight: '0.8 кг',
  warranty: '12 месяцев',
  stock: 8,
  images: [
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=876',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=870',
    'https://images.unsplash.com/photo-1601931935821-5fbe71157695?auto=format&fit=crop&q=80&w=1340',
    'https://images.unsplash.com/photo-1600857062241-98c434a54bcd?auto=format&fit=crop&q=80&w=1548'
  ],
  reviews: [
    {
      id: 1,
      author: 'Екатерина М.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522',
      rating: 5,
      date: '15.04.2025',
      text: 'Превосходная сумка! Приобрела для работы и повседневных выходов. Качество кожи отличное, швы ровные, фурнитура добротная. Цвет полностью соответствует фото. Очень довольна покупкой!'
    },
    {
      id: 2,
      author: 'Анна В.',
      avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=1588',
      rating: 4,
      date: '28.03.2025',
      text: 'Сумка хорошего качества, но немного меньше, чем я ожидала. Тем не менее, все мои необходимые вещи помещаются. Ношу уже месяц, пока никаких претензий к качеству нет.'
    },
    {
      id: 3,
      author: 'Мария Д.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1587',
      rating: 5,
      date: '10.03.2025',
      text: 'Долго выбирала сумку и остановилась на этой модели. Не пожалела ни капли! Очень вместительная, несмотря на компактный размер. Отдельно хочу отметить скорость доставки - всего 2 дня!'
    }
  ]
};

const ProductDetail = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(productData.images[0]);
  const [quantity, setQuantity] = useState(1);
  
  const increaseQuantity = () => {
    if (quantity < productData.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const averageRating = productData.reviews.reduce((acc, review) => acc + review.rating, 0) / productData.reviews.length;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumbs */}
          <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground">Главная</a>
            <ChevronRight className="h-3 w-3" />
            <a href="/catalog" className="hover:text-foreground">Каталог</a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{productData.name}</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Фотогалерея */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <AspectRatio ratio={1 / 1}>
                  <img
                    src={mainImage}
                    alt={productData.name}
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    className={`overflow-hidden rounded-md border ${mainImage === image ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setMainImage(image)}
                  >
                    <AspectRatio ratio={1 / 1}>
                      <img
                        src={image}
                        alt={`${productData.name} view ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Информация о товаре */}
            <div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-playfair text-3xl font-semibold">{productData.name}</h1>
                  <div className="mt-1 flex items-center space-x-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= averageRating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {productData.reviews.length} отзывов
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-4 flex items-baseline space-x-2">
                <span className="font-playfair text-2xl font-semibold">{productData.price.toLocaleString()} ₽</span>
                {productData.oldPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">{productData.oldPrice.toLocaleString()} ₽</span>
                    <Badge variant="destructive">-{productData.discount}%</Badge>
                  </>
                )}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Цвет</h3>
                  <div className="mt-2 flex space-x-2">
                    {productData.colors.map((color) => (
                      <button
                        key={color.name}
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${color.selected ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium">Количество</h3>
                  <div className="mt-2 flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 rounded-r-none"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <div className="flex h-9 w-12 items-center justify-center border-y">
                      {quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 rounded-l-none"
                      onClick={increaseQuantity}
                      disabled={quantity >= productData.stock}
                    >
                      +
                    </Button>
                    <span className="ml-3 text-sm text-muted-foreground">
                      В наличии: {productData.stock} шт.
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button className="flex-1" size="lg">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    В корзину
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Share className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                    <Truck className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium">Бесплатная доставка</p>
                      <p className="text-xs text-muted-foreground">От 5000 рублей</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                    <Package className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium">Упаковка в подарок</p>
                      <p className="text-xs text-muted-foreground">По запросу</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-3">
                    <RefreshCw className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium">Обмен и возврат</p>
                      <p className="text-xs text-muted-foreground">14 дней</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs с информацией и отзывами */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="features">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы ({productData.reviews.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="space-y-4">
                  <p>{productData.description}</p>
                  <ul className="ml-5 space-y-1 list-disc">
                    {productData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="mb-4 text-lg font-medium">Основные характеристики</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Материал</span>
                          <span>{productData.material}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Размеры</span>
                          <span>{productData.dimensions}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Вес</span>
                          <span>{productData.weight}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Гарантия</span>
                          <span>{productData.warranty}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <div className="mb-4 text-lg font-medium">Уход</div>
                      <ul className="space-y-2 text-sm">
                        <li>• Избегайте контакта с водой и агрессивными жидкостями</li>
                        <li>• Храните в защитном чехле вдали от прямых солнечных лучей</li>
                        <li>• Для чистки используйте специальные средства для кожи</li>
                        <li>• При загрязнении протирайте мягкой тканью</li>
                        <li>• Не перегружайте сумку тяжелыми предметами</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg font-medium">Отзывы покупателей</h3>
                      <div className="mt-1 flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${star <= averageRating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{averageRating.toFixed(1)}</span>
                        <span className="ml-1 text-muted-foreground">из 5</span>
                      </div>
                    </div>
                    <Button>Написать отзыв</Button>
                  </div>
                  
                  {productData.reviews.map((review) => (
                    <div key={review.id} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={review.avatar} alt={review.author} />
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{review.author}</div>
                            <div className="text-xs text-muted-foreground">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= review.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-3 text-sm">{review.text}</p>
                    </div>
                  ))}
                  
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-3 text-lg font-medium">Оставить отзыв</h3>
                    <div className="mb-3">
                      <div className="mb-1 text-sm">Ваша оценка:</div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} className="p-1">
                            <Star className="h-6 w-6 text-muted-foreground hover:fill-primary hover:text-primary" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <Textarea className="mb-3" placeholder="Напишите ваш отзыв..." />
                    <Button>Отправить</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
