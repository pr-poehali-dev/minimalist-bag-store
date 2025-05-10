import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { Button } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <Link to="/" className="ml-2 md:ml-0">
            <h1 className="text-xl md:text-2xl font-playfair font-semibold tracking-tight">
              ELEGANCE
            </h1>
          </Link>
        </div>

        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} absolute top-16 left-0 w-full flex-col bg-background p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:space-x-6 md:p-0`}
        >
          <Link
            to="/"
            className="py-2 text-sm transition-colors hover:text-primary md:py-0"
          >
            Главная
          </Link>
          <Link
            to="/catalog"
            className="py-2 text-sm transition-colors hover:text-primary md:py-0"
          >
            Каталог
          </Link>
          <Link
            to="/sales"
            className="py-2 text-sm transition-colors hover:text-primary md:py-0"
          >
            Акции и скидки
          </Link>
          <Link
            to="/gift-cards"
            className="py-2 text-sm transition-colors hover:text-primary md:py-0"
          >
            Подарочные сертификаты
          </Link>
        </nav>

        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/account")}
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              2
            </span>
          </Button>
        </div>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
