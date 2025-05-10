
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Временные данные для примера
const products = [
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
  },
  {
    id: '5',
    name: 'Клатч Vienna',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=1742',
    color: 'Красный',
    material: 'Экокожа'
  },
  {
    id: '6',
    name: 'Сумка Berlin',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1574616302687-3a894c857175?auto=format&fit=crop&q=80&w=1545',
    color: 'Черный',
    material: 'Натуральная кожа'
  },
  {
    id: '7',
    name: 'Шопер Rome',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1548863227-3af567fc3b27?auto=format&fit=crop&q=80&w=1170',
    color: 'Коричневый',
    material: 'Натуральная кожа'
  },
  {
    id: '8',
    name: 'Рюкзак Seoul',
    price: 6990,
    image: 'https://images.unsplash.com/photo-1571633411708-1043359a4bb3?auto=format&fit=crop&q=80&w=1374',
    color: 'Серый',
    material: 'Натуральная кожа'
  }
];

const categories = [
  { id: 'all', name: 'Все категории', count: 68 },
  { id: 'clutch', name: 'Клатчи', count: 18 },
  { id: 'crossbody', name: 'Сумки через плечо', count: 24 },
  { id: 'tote', name: 'Шоперы', count: 15 },
  { id: 'backpack', name: 'Рюкзаки', count: 11 }
];

const colors = [
  { id: 'black', name: 'Черный', count: 25 },
  { id: 'brown', name: 'Коричневый', count: 20 },
  { id: 'beige', name: 'Бежевый', count: 15 },
  { id: 'gray', name: 'Серый', count: 14 },
  { id: 'red', name: 'Красный', count: 8 }
];

const materials = [
  { id: 'leather', name: 'Натуральная кожа', count: 40 },
  { id: 'eco-leather', name: 'Экокожа', count: 28 }
];

const Catalog = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="font-playfair text-3xl font-semibold">Каталог сумок</h1>
              <p className="text-muted-foreground">Найдите идеальную сумку для любого случая</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative flex-1 md:w-64 md:flex-none">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск..."
                  className="pl-8"
                />
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeFilters.map(filter => (
                <Badge key={filter} variant="secondary" className="px-3 py-1">
                  {filter}
                  <button 
                    className="ml-2 text-muted-foreground hover:text-foreground"
                    onClick={() => removeFilter(filter)}
                  >
                    &times;
                  </button>
                </Badge>
              ))}
              <Button 
                variant="link" 
                size="sm" 
                className="text-muted-foreground"
                onClick={() => setActiveFilters([])}
              >
                Очистить все
              </Button>
            </div>
          )}
          
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Фильтры (боковая панель) */}
            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block space-y-6`}>
              <div>
                <h3 className="font-playfair text-lg font-medium">Категории</h3>
                <ul className="mt-3 space-y-2">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        className={`flex w-full items-center justify-between text-sm hover:text-primary ${selectedCategory === category.id ? 'font-medium text-primary' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs text-muted-foreground">{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-playfair text-lg font-medium">Цвет</h3>
                <ul className="mt-3 space-y-2">
                  {colors.map(color => (
                    <li key={color.id} className="flex items-center">
                      <Checkbox 
                        id={`color-${color.id}`}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            addFilter(color.name);
                          } else {
                            removeFilter(color.name);
                          }
                        }}
                      />
                      <label 
                        htmlFor={`color-${color.id}`}
                        className="ml-2 flex flex-1 items-center justify-between text-sm"
                      >
                        <span>{color.name}</span>
                        <span className="text-xs text-muted-foreground">{color.count}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-playfair text-lg font-medium">Материал</h3>
                <ul className="mt-3 space-y-2">
                  {materials.map(material => (
                    <li key={material.id} className="flex items-center">
                      <Checkbox 
                        id={`material-${material.id}`}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            addFilter(material.name);
                          } else {
                            removeFilter(material.name);
                          }
                        }}
                      />
                      <label 
                        htmlFor={`material-${material.id}`}
                        className="ml-2 flex flex-1 items-center justify-between text-sm"
                      >
                        <span>{material.name}</span>
                        <span className="text-xs text-muted-foreground">{material.count}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-playfair text-lg font-medium">Цена</h3>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Input type="number" placeholder="От" />
                  <Input type="number" placeholder="До" />
                </div>
                <Button className="mt-3 w-full">Применить</Button>
              </div>
            </div>
            
            {/* Список продуктов */}
            <div className="md:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <div className="hidden md:block">
                  <p className="text-sm text-muted-foreground">Показано 
                    <span className="font-medium"> {products.length} </span> 
                    товаров из <span className="font-medium">68</span>
                  </p>
                </div>
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="md:hidden"
                    onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  >
                    {mobileFiltersOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
                  </Button>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">Сортировать:</span>
                    <Button variant="ghost" size="sm" className="flex items-center">
                      По популярности
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                  <Button variant="outline" size="icon" disabled>
                    &laquo;
                  </Button>
                  <Button variant="outline" size="icon" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="icon">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &raquo;
                  </Button>
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

export default Catalog;
