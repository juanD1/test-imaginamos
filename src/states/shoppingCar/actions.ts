import * as actionTypes from './constants';
import {
  ShoppingCarAction,
  // GetShoppingCarAction,
  // GetShoppingCarSuccessAction,
  // GetShoppingCarFailureAction,
  AddProductAction,
  // AddProductSuccessAction,
  // AddProductFailureAction,
  RemoveProductByIdAction,
  AddQuantityAction,
  SubtractQuantityAction,
  // RemoveProductByIdSuccessAction,
  // RemoveProductByIdFailureAction,
} from 'types/states/shoppingCar';
import { Products } from 'types/products';

// export const getShoppingCarRequest = (): GetShoppingCarAction => {
//   return {
//     type: actionTypes.GET_SHOPPINGCAR_REQUEST,
//     products
//   };
// };

export const addProductRequest = (product: Products): AddProductAction => {
  return {
    type: actionTypes.ADD_PRODUCT_REQUEST,
    product,
  };
};

export const removeProductByIdRequest = (
  productId: number,
): RemoveProductByIdAction => {
  return {
    type: actionTypes.REMOVE_PRODUCT_REQUEST,
    productId,
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
