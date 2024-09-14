import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';
import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(cart.length > 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const placeOrder = () => {
    console.log('Pedido enviado:', cart);
    alert('Pedido realizado com sucesso!');
    setCart([]);
    localStorage.removeItem('cart');
    setIsCartOpen(false);
  };

  return { cart, isCartOpen, addToCart, removeFromCart, placeOrder, setIsCartOpen };
};
