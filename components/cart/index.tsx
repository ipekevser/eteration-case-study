'use client';

import styles from './style.module.scss';
import PaperWrapper from '../paper';
import CustomButton from '../button';
import { ICartItem, useAppDispatch, useAppSelector } from '@/store/interface';
import { cartActions } from '@/store/cart-slice';
import Tooltip from '@mui/material/Tooltip';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function CartContainer() {
  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state.cart.cartData);

  const handleSubmitCheckout = () => {
    // todo: later can be add submit action
  };

  const totalPrice = cartData.reduce((total: number, item: ICartItem) => total + Number(item.price) * item.count, 0);

  const handleIncreaseCount = (itemId: string) => {
    dispatch(cartActions.increaseItemCount(itemId));
  };

  const handleDecreaseCount = (itemId: string) => {
    dispatch(cartActions.decreaseItemCount(itemId));
  };

  return (
    <div className={styles.cartContainer}>
      <PaperWrapper label={'Cart'} externalClass={styles.paperWrapper}>
        {cartData.length > 0 ? (
          cartData.map((item) => (
            <div className={styles.cart} key={item.id}>
              <div className={styles.productDetails}>
                <Tooltip title={item.name} placement='left-start'>
                  <div className={styles.productName}>{item.name}</div>
                </Tooltip>
                <div className={styles.productPrice}>{item.price}</div>
              </div>
              <ButtonGroup variant='outlined' aria-label='outlined primary button group' className={styles.productCounter}>
                <Button className={styles.descCount} onClick={() => handleDecreaseCount(item.id)}>
                  -
                </Button>
                <span className={styles.amount}>{item.count}</span>
                <Button className={styles.ascCount} onClick={() => handleIncreaseCount(item.id)}>
                  +
                </Button>
              </ButtonGroup>
            </div>
          ))
        ) : (
          <div className={styles.emptyCart}>Cart is Empty</div>
        )}
      </PaperWrapper>
      <PaperWrapper label={'Checkout'} externalClass={styles.checkout}>
        <div className={styles.totalPrice}>
          Total Price: <span>{totalPrice}₺</span>
        </div>
        <CustomButton label={'Checkout'} externalClass={styles.checkoutButton} onClick={handleSubmitCheckout} />
      </PaperWrapper>
    </div>
  );
}
