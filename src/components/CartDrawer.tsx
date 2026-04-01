import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, MessageCircle, CreditCard, Zap, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemove,
  onClear,
  onCheckout
}) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-bbx-dark z-[70] shadow-2xl flex flex-col border-l border-white/10"
          >
            <div className="p-4 sm:p-6 flex justify-between items-center border-b border-white/10">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">Seu <span className="text-bbx-pink">Carrinho</span></h2>
              <div className="flex items-center gap-2">
                {cart.length > 0 && (
                  <button 
                    onClick={onClear}
                    className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-bbx-pink transition-colors mr-2 sm:mr-4"
                  >
                    Limpar
                  </button>
                )}
                <button onClick={onClose} className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
                  <p className="text-base sm:text-lg">Seu carrinho está vazio</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-3 sm:gap-4 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl relative group">
                    <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg sm:rounded-xl" referrerPolicy="no-referrer" />
                    <div className="flex-grow">
                      <h4 className="font-bold text-xs sm:text-sm mb-1">{item.name}</h4>
                      <p className="text-bbx-pink font-bold text-xs sm:text-sm mb-2 sm:mb-3">R$ {item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <Minus className="w-2.5 h-2.5 sm:w-3 h-3" />
                        </button>
                        <span className="text-xs sm:text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <Plus className="w-2.5 h-2.5 sm:w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="absolute top-2 right-2 p-1 opacity-40 sm:opacity-0 sm:group-hover:opacity-100 hover:text-bbx-pink transition-all"
                    >
                      <X className="w-3.5 h-3.5 sm:w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-white/10 bg-bbx-black/50">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="text-white/60 font-medium uppercase tracking-widest text-[10px] sm:text-xs">Total Estimado</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold">R$ {total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full bbx-button bbx-button-primary flex items-center justify-center gap-3 py-4 sm:py-5 text-xs sm:text-sm"
                >
                  Finalizar via WhatsApp
                  <MessageCircle className="w-4 h-4 sm:w-5 h-5" />
                </button>
                <div className="flex justify-center items-center gap-4 mt-6 opacity-30 grayscale">
                  <CreditCard className="w-5 h-5" />
                  <Zap className="w-5 h-5" />
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-[10px] text-center mt-4 text-white/30 uppercase tracking-widest">
                  Pagamento via Pix • Entrega Digital Imediata
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
