
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-cream">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-playfair text-lg font-medium">ELEGANCE</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Изысканные сумки для вашего безупречного стиля
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://instagram.com" className="text-neutral hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-neutral hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-neutral hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-base font-medium">Каталог</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/catalog/clutch" className="text-neutral hover:text-primary">
                  Клатчи
                </Link>
              </li>
              <li>
                <Link to="/catalog/crossbody" className="text-neutral hover:text-primary">
                  Сумки через плечо
                </Link>
              </li>
              <li>
                <Link to="/catalog/tote" className="text-neutral hover:text-primary">
                  Шоперы
                </Link>
              </li>
              <li>
                <Link to="/catalog/backpack" className="text-neutral hover:text-primary">
                  Рюкзаки
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-base font-medium">Информация</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-neutral hover:text-primary">
                  О магазине
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-neutral hover:text-primary">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-neutral hover:text-primary">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="text-neutral hover:text-primary">
                  Подарочные сертификаты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-base font-medium">Контакты</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-neutral" />
                <span>Москва, ул. Арбат, 24</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-neutral" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-neutral" />
                <span>info@elegance-bags.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-6 text-center text-xs text-neutral">
          <p>© {new Date().getFullYear()} ELEGANCE. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
