import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FaqItemData } from '../types';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 flex justify-between items-center text-left group"
      >
        <span className="font-bold text-base sm:text-lg group-hover:text-bbx-pink transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-bbx-pink' : 'text-white/20'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-6 text-white/50 leading-relaxed text-[10px] sm:text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQProps {
  faqs: FaqItemData[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <section id="faq" className="py-16 sm:py-32 bg-bbx-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
            Dúvidas <span className="text-bbx-pink">Frequentes</span>
          </h2>
          <p className="text-white/40 uppercase tracking-widest text-[8px] sm:text-[10px] font-bold">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>

        <div className="glass p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem]">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
