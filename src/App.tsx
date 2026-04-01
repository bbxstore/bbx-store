import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, Order } from './types';
import { PRODUCTS, FAQS } from './data/products';

// Components
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import CheckoutSummary from './components/CheckoutSummary';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import FeaturedProduct from './sections/FeaturedProduct';
import Benefits from './sections/Benefits';
import HowItWorks from './sections/HowItWorks';
import ProductsGrid from './sections/ProductsGrid';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';

const WHATSAPP_NUMBER = '5511999999999';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bbx_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [order, setOrder] = useState<Order | null>(() => {
    try {
      const saved = localStorage.getItem('bbx_order');
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error('Error loading order from localStorage:', error);
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bbx_cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('bbx_order', JSON.stringify(order));
    } catch (error) {
      console.error('Error saving order to localStorage:', error);
    }
  }, [order]);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const handleCheckout = () => {
    const newOrder: Order = {
      id: `BBX-${Math.random().toString(36).slice(2, 11).toUpperCase()}`,
      items: [...cart],
      total: cartTotal,
      date: new Date().toLocaleString('pt-BR'),
      status: 'Aguardando comprovante'
    };
    
    setOrder(newOrder);
    setCart([]);
    setIsCartOpen(false);

    const message = `Olá! Gostaria de finalizar o pedido ${newOrder.id} na BBX Store:\n\n${newOrder.items.map(item => `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`).join('\n')}\n\nTotal: R$ ${newOrder.total.toFixed(2)}\n\nStatus: ${newOrder.status}\nData: ${newOrder.date}\n\nForma de pagamento: Pix`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const mainProduct = PRODUCTS.find(p => p.id === 'main-prod');
  const otherProducts = PRODUCTS.filter(p => p.id !== 'main-prod');

  if (!mainProduct) {
    return (
      <div className="min-h-screen bg-bbx-black flex items-center justify-center text-white">
        <p className="text-xl font-display uppercase tracking-widest">Produto principal não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-bbx-pink selection:text-white pb-20 md:pb-0">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        onCheckout={handleCheckout}
      />

      {order && (
        <CheckoutSummary 
          order={order} 
          onClose={() => setOrder(null)} 
        />
      )}

      <MobileBottomBar 
        cartCount={cartCount} 
        cartTotal={cartTotal} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      <Hero mainProduct={mainProduct} onAddToCart={addToCart} />
      
      <FeaturedProduct product={mainProduct} onAddToCart={addToCart} />
      
      <Benefits />
      
      <HowItWorks />
      
      <ProductsGrid products={otherProducts} onAddToCart={addToCart} />
      
      <FAQ faqs={FAQS} />
      
      <FinalCTA />
      
      <Footer />
    </div>
  );
}
