import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { step: "01", title: "Escolha sua Ferramenta", desc: "Navegue pelo nosso catálogo de elite e selecione o recurso que sua operação precisa hoje." },
    { step: "02", title: "Pagamento Instantâneo", desc: "Processo via Pix ou cartão. A confirmação é automática e leva apenas alguns segundos." },
    { step: "03", title: "Acesso e Escala", desc: "Receba os dados de acesso no e-mail e WhatsApp. Implemente e comece a escalar imediatamente." }
  ];

  return (
    <section className="py-16 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12 uppercase tracking-tight leading-none">
              Como <br />
              <span className="text-bbx-pink">Funciona?</span>
            </h2>
            <div className="space-y-8 sm:space-y-12">
              {steps.map((item, i) => (
                <div key={i} className="flex gap-6 sm:gap-8 relative group">
                  {i !== 2 && <div className="absolute left-5 sm:left-6 top-14 sm:top-16 w-px h-12 sm:h-16 bg-white/5" />}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center font-display font-bold text-sm sm:text-base text-bbx-pink flex-shrink-0 group-hover:bg-bbx-pink group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-2xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="glass rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-4 aspect-square relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2.5rem]" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-bbx-pink/20 blur-[40px] sm:blur-[60px] rounded-full" />
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 bg-bbx-pink/10 blur-[40px] sm:blur-[60px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
