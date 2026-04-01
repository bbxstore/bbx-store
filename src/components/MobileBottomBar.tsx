import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

interface MobileBottomBarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
}

const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ cartCount, cartTotal, onOpenCart }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 pb-6">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="glass rounded-full p-2 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-bbx-pink/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-bbx-pink/5 -z-10" />
        <div className="flex items-center gap-4 pl-5">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-bbx-pink/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-bbx-pink" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-bbx-black text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Total</span>
            <span className="text-sm font-bold text-gradient">R$ {cartTotal.toFixed(2)}</span>
          </div>
        </div>
        <button 
          onClick={onOpenCart}
          className="bg-bbx-pink text-white px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,45,85,0.4)] active:scale-95 transition-transform"
        >
          {cartCount > 0 ? 'Ver Carrinho' : 'Comprar'}
        </button>
      </motion.div>
    </div>
  );
};

export default MobileBottomBar;
