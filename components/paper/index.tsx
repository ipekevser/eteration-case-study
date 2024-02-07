import * as React from 'react';
import Paper from '@mui/material/Paper';
import styles from './style.module.scss';
import { IPaper } from './interface';
import classNames from 'classnames';

export default function PaperWrapper({ children, label, externalClass }: IPaper) {
  return (
    <div className={styles.paperContainer}>
      {label && <div className={styles.label}>{label}</div>}
      <Paper elevation={3} className={classNames(styles.paper, externalClass)}>
        {children}
      </Paper>
    </div>
  );
}
