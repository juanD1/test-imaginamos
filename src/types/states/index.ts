import { ShoppingCarState } from './shoppingCar';

export interface State {
  shoppingCar: ShoppingCarState;
}

export interface Action {
  type: string;
}
