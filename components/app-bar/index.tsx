'use client';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './style.module.scss';
import useIcons from '@/helpers/icons';
import SearchInput from '../search';
import { ICartItem, useAppDispatch, useAppSelector } from '@/store/interface';
import { filterActions } from '@/store/filter-slice';
import { debounce } from '@/helpers/utils';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default function MainAppBar() {
  const { ProfileIcon, PortfeilIcon } = useIcons();
  const routes = useRouter();
  const dispatch = useAppDispatch();

  const filterParams = useAppSelector((state) => state.filter.filterParams);
  const cartData = useAppSelector((state) => state.cart.cartData);

  const totalPrice = cartData.reduce((total: number, item: ICartItem) => total + Number(item.price) * item.count, 0);

  const handleChangeSearchParam = debounce((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(filterActions.updateFilterParams({ ...filterParams, searchParam: e.target.value }));
  }, 500);

  const navigateHome = () => routes.push(ROUTES.HOME);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar className={styles.toolbar} variant='dense'>
          <div className={styles.logoField}>
            <h2 onClick={navigateHome}>Eteration</h2>
          </div>
          <div className={styles.searchBar}>
            <SearchInput onChange={handleChangeSearchParam} />
          </div>

          <div className={styles.profileField}>
            <div className={styles.portfeil}>
              <PortfeilIcon />
              <div>{totalPrice}₺</div>
            </div>
            <div className={styles.profile}>
              <ProfileIcon />
              <div>Kerem</div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
