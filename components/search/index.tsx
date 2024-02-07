'use client';

import InputBase from '@mui/material/InputBase';
import styles from './style.module.scss';
import useIcons from '@/helpers/icons';
import classNames from 'classnames';
import { ISearch } from './interface';

export default function SearchInput({ externalClass, onChange }: ISearch) {
  const { SearchBarIcon } = useIcons();

  return (
    <div className={classNames(styles.searchField, externalClass)}>
      <SearchBarIcon />
      <InputBase placeholder='Search' inputProps={{ 'aria-label': 'search' }} onChange={onChange} fullWidth/>
    </div>
  );
}
