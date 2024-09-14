
// import { StudantTable } from "@/components/StudentTable";
// import { students } from '@/data/students';

// const Page = () => {
//   return (
//     // <div className="container mx-auto">
//     //   <h1 className="text-5xl mb-5">Lista de estudantes</h1>
//     //   <StudantTable students={students}/>
//     // </div>
//     <div>
//     </div>
//   );
// }

// export default Page;

"use client";

import React, { useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import ProductList from '@/components/product/ProductList';
import CartSidebar from '@/components/cart/CartSideBar';
import { Product } from '@/types/Product';
import styles from '@/styles/Cart.module.css'; 

const Page = () => {
  const { cart, isCartOpen, addToCart, removeFromCart, placeOrder, setIsCartOpen } = useCart();

  const products: Product[] = [
    { id: 1, name: 'Pizza Margherita', description: 'Molho de tomate, queijo e manjericão fresco.', price: 20, imageUrl: 'https://irp.cdn-website.com/33406c6e/dms3rep/multi/margherita-7d163fb8.jpg' },
    { id: 2, name: 'Pizza Calabresa', description: 'Molho de tomate, queijo, calabresa e cebola.', price: 25, imageUrl: 'https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg' },
    { id: 3, name: 'Pizza Calabresa', description: 'Molho de tomate, queijo, calabresa e cebola.', price: 25, imageUrl: 'https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg' },
    { id: 4, name: 'Pizza Calabresa', description: 'Molho de tomate, queijo, calabresa e cebola.', price: 25, imageUrl: 'https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg' },
    { id: 5, name: 'Pizza Calabresa', description: 'Molho de tomate, queijo, calabresa e cebola.', price: 25, imageUrl: 'https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg' },
    { id: 6, name: 'Pizza Calabresa', description: 'Molho de tomate, queijo, calabresa e cebola.', price: 25, imageUrl: 'https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024-780x450.jpg' },
  ];

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Limpeza para remover a classe quando o componente for desmontado
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isCartOpen]);

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <CartSidebar
        cart={cart}
        isCartOpen={isCartOpen}
        removeFromCart={removeFromCart}
        placeOrder={placeOrder}
        setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
};

export default Page;
