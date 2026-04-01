import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Smartphone } from 'lucide-react';
import { Order } from '../types';

interface CheckoutSummaryProps {
  order: Order;
  onClose: () => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ order, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `Pedido BBX Store: ${order.id}\nStatus: ${order.status}\nData: ${order.date}\nTotal: R$ ${order.total.toFixed(2)}\nItens: ${order.items.map(i => `${i.name} (${i.quantity}x)`).join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative glass max-w-lg w-full rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 overflow-hidden border-bbx-pink/20"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-bbx-pink" />
        
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-bbx-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-bbx-pink" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2">Pedido <span className="text-bbx-pink">Recebido</span></h2>
          <p className="text-white/40 text-[10px] sm:text-sm uppercase tracking-widest font-bold">Aguardando comprovante via WhatsApp</p>
        </div>

        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          <div className="flex justify-between items-center py-3 sm:py-4 border-b border-white/5">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30">Código</span>
            <span className="font-mono text-bbx-pink font-bold text-sm sm:text-base">{order.id}</span>
          </div>
          <div className="flex justify-between items-center py-3 sm:py-4 border-b border-white/5">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30">Status</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full">{order.status}</span>
          </div>
          <div className="flex justify-between items-center py-3 sm:py-4 border-b border-white/5">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30">Data/Hora</span>
            <span className="text-[10px] sm:text-xs font-bold">{order.date}</span>
          </div>
          
          <div className="py-3 sm:py-4">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3 sm:mb-4 block">Itens do Pedido</span>
            <div className="space-y-2 sm:space-y-3">
              {order.items.map(item => (
                <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                  <span className="text-white/60">{item.quantity}x {item.name}</span>
                  <span className="font-bold">R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-white/10 flex justify-between items-center">
            <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight">Total</span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-bbx-pink">R$ {order.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleCopy}
            className="w-full py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Smartphone className="w-4 h-4" />}
            {copied ? 'Copiado!' : 'Copiar Resumo do Pedido'}
          </button>
          <button 
            onClick={onClose}
            className="w-full bbx-button bbx-button-primary py-4 text-[10px] uppercase tracking-widest"
          >
            Fechar e Voltar
          </button>
        </div>

        <p className="text-[9px] text-center mt-8 text-white/20 uppercase tracking-[0.3em] leading-relaxed">
          O acesso será liberado imediatamente após o envio do comprovante no WhatsApp de suporte.
        </p>
      </motion.div>
    </div>
  );
};

export default CheckoutSummary;
