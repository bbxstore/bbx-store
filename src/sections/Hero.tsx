import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  mainProduct: Product;
  onAddToCart: (p: Product) => void;
}

const Hero: React.FC<HeroProps> = ({ mainProduct, onAddToCart }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,45,85,0.15),transparent_70%)]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-bbx-pink/10 blur-[120px] rounded-full animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 shadow-xl">
            <Zap className="w-4 h-4 text-bbx-pink fill-bbx-pink" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Premium Digital Solutions</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.85] mb-6 sm:mb-8 tracking-tighter uppercase">
            Escale sua <br />
            <span className="text-gradient">Produção com IA.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/50 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            Tenha acesso às mesmas ferramentas de automação e IA que os maiores players do mercado digital utilizam para criar conteúdo, automatizar processos e multiplicar resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-6 sm:px-0">
            <button 
              onClick={() => onAddToCart(mainProduct)}
              className="w-full sm:w-auto bbx-button bbx-button-primary flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-widest group"
            >
              Quero Escalar com IA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#produtos" className="w-full sm:w-auto bbx-button bbx-button-outline px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-widest">
              Ver Oferta Exclusiva
            </a>
          </div>

          <div className="mt-12 sm:mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-30">
            <div className="flex flex-col items-center">
              <span className="font-display text-2xl sm:text-3xl font-bold">12k+</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">Vendas</span>
            </div>
            <div className="w-px h-8 sm:h-10 bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="font-display text-2xl sm:text-3xl font-bold">99%</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">Satisfação</span>
            </div>
            <div className="w-px h-8 sm:h-10 bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="font-display text-2xl sm:text-3xl font-bold">24/7</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">Suporte</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
