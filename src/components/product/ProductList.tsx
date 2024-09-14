// src/components/products/ProductList.tsx

import React from 'react';
import styles from '../../styles/Product.module.css';
import ProductItem from './ProductItem'; // Certifique-se de que o caminho está correto
import { Product } from '@/types/Product';

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductList = ({ products, addToCart }: ProductListProps) => (
  <div className={styles.products}>
    <h1 className={styles.productHeading}>Produtos</h1>
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
);

export default ProductList;
