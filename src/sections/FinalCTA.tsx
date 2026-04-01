import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-bbx-pink/5 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,45,85,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 sm:p-16 md:p-24 rounded-[2rem] sm:rounded-[4rem] border-bbx-pink/20 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-48 h-48 sm:w-64 sm:h-64 bg-bbx-pink/20 blur-[80px] sm:blur-[100px] rounded-full" />
          <div className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 w-48 h-48 sm:w-64 sm:h-64 bg-bbx-pink/10 blur-[80px] sm:blur-[100px] rounded-full" />
          
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 uppercase tracking-tighter leading-[0.9]">
            Pronto para <br />
            <span className="text-gradient">Escalar?</span>
          </h2>
          
          <p className="text-white/50 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Não deixe sua produtividade ao acaso. Adquira agora as ferramentas que vão transformar sua forma de criar e multiplicar seus resultados no digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="#featured"
              className="w-full sm:w-auto bbx-button bbx-button-primary flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-6 text-xs sm:text-sm uppercase tracking-widest group"
            >
              Desbloquear Meu Acesso
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-40">
              <ShoppingBag className="w-4 h-4" />
              Acesso Instantâneo via E-mail
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
