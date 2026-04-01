import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 sm:py-4' : 'py-4 sm:py-6'}`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-2 sm:py-3 transition-all duration-500 ${scrolled ? 'glass rounded-full mx-4 sm:mx-6' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-bbx-pink rounded-lg flex items-center justify-center font-display font-bold text-lg sm:text-xl italic shadow-[0_0_15px_rgba(255,45,85,0.4)]">B</div>
          <span className="font-display text-lg sm:text-xl tracking-tighter uppercase font-bold">BBX <span className="text-bbx-pink">Store</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
          <a href="#featured" className="hover:text-bbx-pink transition-colors">Destaque</a>
          <a href="#produtos" className="hover:text-bbx-pink transition-colors">Catálogo</a>
          <a href="#faq" className="hover:text-bbx-pink transition-colors">Dúvidas</a>
        </div>

        <button 
          onClick={onOpenCart}
          className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
        >
          <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-bbx-pink transition-colors" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-bbx-pink text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border-2 border-bbx-black shadow-lg">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
