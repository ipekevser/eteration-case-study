import { Product } from '@/store/interface';

export interface IProductCard {
  item: Product;
}

export interface ICartItem {
  id: string;
  name: string;
  price: string;
  count: number;
}
