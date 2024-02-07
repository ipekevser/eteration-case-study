'use client';

import { ICustomButton } from './interface';
import Button from '@mui/material/Button';
import styles from './style.module.scss';
import classNames from 'classnames';

export default function CustomButton({ label, externalClass, onClick }: ICustomButton) {
  return (
    <Button variant='contained' className={classNames(styles.customButton, externalClass)} onClick={onClick}>
      {label}
    </Button>
  );
}
