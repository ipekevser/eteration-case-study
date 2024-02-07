'use client'

import CartContainer from '@/components/cart';
import ProductDetail from '@/components/product-detail';
import { useAppDispatch, useAppSelector } from '@/store/interface';
import { fetchDetailContent } from '@/store/list-slice';
import { useEffect } from 'react';
import styles from './style.module.scss';

export default function ProductDetailPage({ params }: { params: { id: string } }) {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailContent({id: params.id}));
  }, []);

  const selectedProduct = useAppSelector((state) => state.list.selectedProduct);


  return (
    <div className={styles.detailContainer}>
      <ProductDetail item={selectedProduct}/>
      <CartContainer />
    </div>
  );
}
