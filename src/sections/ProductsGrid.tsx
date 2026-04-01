import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface ProductsGridProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, onAddToCart }) => {
  return (
    <section id="produtos" className="py-16 sm:py-32 bg-bbx-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="text-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
              Catálogo <span className="text-bbx-pink">Completo</span>
            </h2>
            <p className="text-white/50 max-w-xl uppercase tracking-widest text-[8px] sm:text-[10px] font-bold">
              Soluções complementares para sua jornada digital
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">
              {products.length} Produtos Disponíveis
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
