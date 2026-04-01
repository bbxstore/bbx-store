import React from 'react';
import { Star, CheckCircle2, TrendingUp } from 'lucide-react';
import { Product } from '../types';

interface FeaturedProductProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product, onAddToCart }) => {
  return (
    <section id="featured" className="py-16 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-bbx-pink/20 shadow-[0_0_50px_rgba(255,45,85,0.1)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 sm:h-96 lg:h-auto overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bbx-black lg:bg-gradient-to-r lg:from-bbx-black lg:to-transparent" />
            </div>
            <div className="p-8 sm:p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-bbx-pink fill-bbx-pink" />
                <span className="text-bbx-pink text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">Produto Estrela</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight leading-none">
                {product.name}
              </h2>
              <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                O Google Pro com integração VO3 é a ferramenta definitiva para quem busca alta performance. Com 1000 créditos inclusos, você tem o poder de processamento necessário para automações complexas, análise de dados em larga escala e criação de conteúdo assistida por IA de última geração.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                {['Google Pro Integrado', 'VO3 de Alta Performance', '1000 Créditos Inclusos', 'Suporte Técnico Especializado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] sm:text-sm font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-bbx-pink" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full sm:w-auto bbx-button bbx-button-primary px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-widest"
                >
                  Comprar Agora - R$ {product.price.toFixed(2)}
                </button>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-bbx-pink" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-50">Alta Demanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
