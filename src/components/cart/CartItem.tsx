import React from 'react';
import styles from '../../styles/Cart.module.css';

type CartItemProps = {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string; // Adiciona a URL da imagem
  };
  removeFromCart: (productId: number) => void;
};

const CartItem = ({ item, removeFromCart }: CartItemProps) => (
  <div className={styles.cartItem}>
    <div className={styles.itemInfo}>
      <h3>{item.name}</h3>
      <p>Quantidade: {item.quantity}</p>
      <p>Preço total: R${(item.price * item.quantity).toFixed(2)}</p>
      <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
        Remover
      </button>
    </div>
    <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
  </div>
);

export default CartItem;
