'use client';

import CartContainer from '@/components/cart';
import FilterContainer from '@/components/filter';
import ProductList from '@/components/product-list';
import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <FilterContainer />
      <ProductList />
      <CartContainer />
    </div>
  );
}
