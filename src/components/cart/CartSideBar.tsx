// src/components/cart/CartSidebar.tsx
import React from 'react';
import CartItem from './CartItem';
import { CartItem as CartItemType } from '@/types/CartItem'; // Atualize o caminho conforme necessário
import styles from '../../styles/Cart.module.css';

type CartSidebarProps = {
  cart: CartItemType[];
  isCartOpen: boolean;
  removeFromCart: (productId: number) => void;
  placeOrder: () => void;
  setIsCartOpen: (isOpen: boolean) => void;
};

const CartSidebar = ({
  cart,
  isCartOpen,
  removeFromCart,
  placeOrder,
  setIsCartOpen,
}: CartSidebarProps) => (
  <div className={`${styles.cartSidebar} ${isCartOpen ? styles.open : ''}`}>
    <div className={styles.cartHeader}>
      <h2>Carrinho</h2>
      <button className={styles.closeButton} onClick={() => setIsCartOpen(false)}>
        X
      </button>
    </div>

    <div className={styles.cartItems}>
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Carrinho vazio</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>

    {cart.length > 0 && (
      <button className={styles.finalizeButton} onClick={placeOrder}>
        Finalizar Pedido
      </button>
    )}
  </div>
);

export default CartSidebar;
