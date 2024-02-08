'use client';

import { useEffect } from 'react';
import styles from './style.module.scss';
import ProductCard from '../card';
import { fetchContent, listActions } from '@/store/list-slice';
import { useAppDispatch, useAppSelector } from '@/store/interface';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import classNames from 'classnames';

export default function ProductList() {
  const dispatch = useAppDispatch();

  const contents = useAppSelector((state) => state.list.items);
  const totalCount = useAppSelector((state) => state.list.totalCount);
  const isLoading = useAppSelector((state) => state.list.isLoading);
  const filterParams = useAppSelector((state) => state.filter.filterParams);
  const page = useAppSelector((state) => state.list.page);

  useEffect(() => {
    dispatch(fetchContent({ page: page, ...filterParams }));
  }, [page, filterParams]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(listActions.setPage(value));
  };

  const paginationClass = classNames(styles.paginationBar, {
    [styles.disabled]: isLoading,
  });

  const productListClass = classNames(styles.productList, {
    [styles.disableJustify]: contents.length < 12,
  });

  return (
    <div className={styles.productListContainer}>
      {isLoading && <CircularProgress className={styles.progress} />}
      <div className={productListClass}>{!isLoading && contents?.map((item) => <ProductCard item={item} key={item.id} />)}</div>
      <Pagination page={page} count={Math.ceil(totalCount / 12)} shape='rounded' className={paginationClass} onChange={handlePageChange} />
    </div>
  );
}
