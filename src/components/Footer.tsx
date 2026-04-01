import React from 'react';
import { Instagram, MessageCircle, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 sm:py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-bbx-pink/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 mb-12 sm:mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-8 h-8 bg-bbx-pink rounded-lg flex items-center justify-center font-display font-bold text-xl italic">B</div>
              <span className="font-display text-xl tracking-tighter uppercase font-bold">BBX <span className="text-bbx-pink">Store</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 sm:mb-8">
              Líder em soluções digitais de alta performance. Automatize sua escala e domine o mercado com as melhores ferramentas do mundo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-bbx-pink transition-all group">
                <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-bbx-pink transition-all group">
                <MessageCircle className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-bbx-pink mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Início</a></li>
              <li><a href="#featured" className="text-white/40 hover:text-white transition-colors">Destaque</a></li>
              <li><a href="#produtos" className="text-white/40 hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#faq" className="text-white/40 hover:text-white transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-bbx-pink mb-8">Suporte</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">E-mail</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-bbx-pink mb-8">Segurança</h4>
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <span className="text-xs font-bold uppercase tracking-widest">Site Seguro</span>
              </div>
              <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest">
                Seus dados estão protegidos por criptografia de ponta a ponta.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
            © 2024 BBX Store. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 grayscale opacity-20">
            <span className="text-[10px] font-bold uppercase tracking-widest">Pix</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Visa</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
