import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative glass rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-bbx-pink/30 transition-all duration-500"
    >
      {product.tag && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-bbx-pink text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full shadow-lg">
          {product.tag}
        </div>
      )}
      
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bbx-black/90 via-bbx-black/20 to-transparent" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-bbx-pink text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em]">{product.category}</span>
          <span className="font-display text-base sm:text-lg font-bold">R$ {product.price.toFixed(2)}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-bbx-pink transition-colors line-clamp-1">{product.name}</h3>
        <p className="text-white/50 text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3">{product.description}</p>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full bbx-button bbx-button-primary py-3 sm:py-3.5 flex items-center justify-center gap-2 group/btn text-[9px] sm:text-[10px] uppercase tracking-widest"
        >
          Adicionar
          <Plus className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:rotate-90" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
