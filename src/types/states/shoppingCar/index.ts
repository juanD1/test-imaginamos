import { Action } from 'types/states';
import { Products } from 'types/products';

export interface ShoppingCarAction extends Action {}

// export interface GetShoppingCarAction extends Action {
//   products: Products[];
// }

export interface AddProductAction extends Action {
  product: Products;
}

export interface RemoveProductByIdAction extends Action {
  productId: number;
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
