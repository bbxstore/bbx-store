import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Lock, Cpu, Headphones } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: Rocket, title: "Acesso Instantâneo", desc: "Sem esperas. Assim que o pagamento é confirmado, os dados de acesso chegam no seu e-mail e WhatsApp para você começar agora." },
    { icon: Lock, title: "Compra 100% Segura", desc: "Seus dados protegidos por criptografia de ponta e suporte humano real disponível para qualquer dúvida durante a compra." },
    { icon: Cpu, title: "Ferramentas de Elite", desc: "Não perdemos tempo com o básico. Selecionamos apenas as tecnologias que entregam performance real para quem busca escala." },
    { icon: Headphones, title: "Mentoria Técnica", desc: "Mais que suporte, oferecemos auxílio na implementação para garantir que você extraia cada gota de valor das suas novas ferramentas." }
  ];

  return (
    <section className="py-16 sm:py-32 bg-bbx-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
            Vantagem <span className="text-bbx-pink">Competitiva</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-[8px] sm:text-[10px] font-bold">
            Por que os maiores players escolhem a BBX Store
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] hover:border-bbx-pink/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-bbx-pink transition-colors">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-tight">{benefit.title}</h4>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
