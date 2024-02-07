'use client';

import React from 'react';
import Box from '@mui/material/Box';
import styles from './style.module.scss';
import Image from 'next/image';
import CustomButton from '../button';
import { ICartItem, Product, useAppDispatch, useAppSelector } from '@/store/interface';
import { cartActions } from '@/store/cart-slice';
import CircularProgress from '@mui/material/CircularProgress';
import PaperWrapper from '../paper';

export default function ProductDetail({ item }: { item: Product | null }) {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.list.isLoading);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!item) return;
    const newItem: ICartItem = {
      price: item.price,
      name: item.name,
      id: item.id,
      count: 1,
    };

    dispatch(cartActions.updateCartData(newItem));
  };

  console.log(item);

  return (
    <Box className={styles.detailField}>
      <PaperWrapper externalClass={styles.detailWrapper}>
        {isLoading ? (
          <div className={styles.spinner}>
            <CircularProgress />
          </div>
        ) : (
          <>
            {item?.image && <Image src={item?.image} width={480} height={450} alt='Product image' priority />}
            <div>
              <div className={styles.name}>{item?.name}</div>
              <div className={styles.price}>{item?.price} ₺</div>
              <CustomButton label={'Add to Cart'} externalClass={styles.cardButton} onClick={handleClick} />
              <div className={styles.description}>{item?.description}</div>
            </div>
          </>
        )}
      </PaperWrapper>
    </Box>
  );
}
