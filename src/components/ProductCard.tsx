
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  material: string;
}

const ProductCard = ({ id, name, price, image, color, material }: ProductCardProps) => {
  return (
    <div className="product-card group relative overflow-hidden rounded-md border bg-background">
      <div className="absolute right-2 top-2 z-10">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <Link to={`/product/${id}`}>
        <div className="overflow-hidden">
          <AspectRatio ratio={1 / 1}>
            <img
              src={image}
              alt={name}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </div>
        
        <div className="p-4">
          <h3 className="font-playfair text-base font-medium">{name}</h3>
          <div className="mt-1 flex items-center text-xs text-muted-foreground">
            <span>{material}</span>
            <span className="mx-1">•</span>
            <span>{color}</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-medium">{price.toLocaleString()} ₽</p>
            <Button variant="ghost" size="sm" className="h-8 rounded-md px-2 text-xs">
              В корзину
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
