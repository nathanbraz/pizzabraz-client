import React from 'react';
import styles from '../../styles/Product.module.css';

type ProductItemProps = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string; // Adiciona a URL da imagem
  };
  addToCart: (product: ProductItemProps['product']) => void;
};

const ProductItem = ({ product, addToCart }: ProductItemProps) => (
  <div className={styles.product}>
    <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
    <h2 className={styles.productName}>{product.name}</h2>
    <p className={styles.productDescription}>{product.description}</p>
    <p className={styles.productPrice}>Preço: R${product.price.toFixed(2)}</p>
    <button className={styles.addButton} onClick={() => addToCart(product)}>
      Adicionar ao Carrinho
    </button>
  </div>
);

export default ProductItem;
