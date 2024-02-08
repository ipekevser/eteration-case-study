'use client';

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import styles from './style.module.scss';
import Image from 'next/image';
import { ICartItem, IProductCard } from './interface';
import CustomButton from '../button';
import { useAppDispatch } from '@/store/interface';
import { cartActions } from '@/store/cart-slice';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default function ProductCard({ item }: IProductCard) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  //load initial cart data from local storage
  useEffect(() => {
    dispatch(cartActions.getCartData());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const newItem: ICartItem = {
      price: item.price,
      name: item.name,
      id: item.id,
      count: 1,
    };

    dispatch(cartActions.updateCartData(newItem));
  };

  const navigateDetail = () => {
    router.push(ROUTES.DETAIL + `/${item.id}`);
  };

  return (
    <Box className={styles.cardContainer} onClick={navigateDetail}>
      <Image src={item.image} width={160} height={150} alt='Product image' priority />
      <div className={styles.price}>{item.price} ₺</div>
      <div className={styles.name}>{item.name}</div>
      <CustomButton label={'Add to Cart'} externalClass={styles.cardButton} onClick={handleClick} />
    </Box>
  );
}
