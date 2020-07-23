import * as actionTypes from './constants';
import {
  ShoppingCarAction,
  AddProductAction,
  RemoveProductAction,
  AddQuantityAction,
  SubtractQuantityAction,
} from 'types/states/shoppingCar';
import { Products } from 'types/products';

export const addProductRequest = (product: Products): AddProductAction => {
  return {
    type: actionTypes.ADD_PRODUCT_REQUEST,
    product,
  };
};

export const removeProductRequest = (
  product: Products,
): RemoveProductAction => {
  return {
    type: actionTypes.REMOVE_PRODUCT_REQUEST,
    product,
  };
};

export const AddQuantityRequest = (product: Products): AddQuantityAction => {
  return {
    type: actionTypes.ADD_QUANTITY_REQUEST,
    product,
  };
};

export const SubtractQuantityRequest = (
  product: Products,
): SubtractQuantityAction => {
  return {
    type: actionTypes.SUBTRACT_QUANTITY_REQUEST,
    product,
  };
};

export const clearShoppingCar = (): ShoppingCarAction => {
  return {
    type: actionTypes.CLEAR_SHOPPINGCAR,
  };
};
