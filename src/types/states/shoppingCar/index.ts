import { Action } from 'types/states';
import { Products } from 'types/products';

export interface ShoppingCarAction extends Action {}

export interface AddProductAction extends Action {
  product: Products;
}

export interface RemoveProductAction extends Action {
  product: Products;
}

export interface AddQuantityAction extends Action {
  product: Products;
}

export interface SubtractQuantityAction extends Action {
  product: Products;
}

export interface ShoppingCarState {
  products: Products[];
  total: number;
  shoppingCarAction: string | null;
}
