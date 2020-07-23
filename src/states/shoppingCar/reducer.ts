import * as actionTypes from './constants';
import {
  AddProductAction,
  RemoveProductByIdAction,
  AddQuantityAction,
  SubtractQuantityAction,
  ShoppingCarState,
} from 'types/states/shoppingCar';
import { Products } from 'types/products';

const initialState: ShoppingCarState = {
  products: [],
  total: 0,
  shoppingCarAction: null,
};

const shoppingCarReducer = (
  state: ShoppingCarState = initialState,
  action: AddProductAction | RemoveProductByIdAction,
): ShoppingCarState => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_REQUEST: {
      const existedItem: Products | undefined | null =
        state.products &&
        state.products.find(
          product =>
            product.productKey ===
            (action as AddProductAction).product.productKey,
        );

      if (!existedItem) {
        const { price } = (action as AddProductAction).product;
        (action as AddProductAction).product.quantity = 1;
        return {
          ...state,
          products: [...state.products, (action as AddProductAction).product],
          total: state.total + price,
          shoppingCarAction: action.type,
        };
      } else {
        return {
          ...state,
          shoppingCarAction: action.type,
        };
      }
    }
    case actionTypes.REMOVE_PRODUCT_REQUEST: {
      return { ...state, shoppingCarAction: action.type };
    }
    case actionTypes.ADD_QUANTITY_REQUEST: {
      const updatedProducts: Products[] | undefined | null =
        state.products &&
        state.products.map(product => {
          if (
            product.productKey ===
            (action as AddQuantityAction).product.productKey
          ) {
            product.quantity += 1;
          }
          return product;
        });
      console.log('updatedProducts: ', updatedProducts);
      (action as AddQuantityAction).product.quantity += 1;
      return {
        ...state,
        // products: [updatedProducts],
        total: state.total + (action as AddQuantityAction).product.price,
      };
    }
    case actionTypes.SUBTRACT_QUANTITY_REQUEST: {
      return { ...state, shoppingCarAction: action.type };
    }
    case actionTypes.CLEAR_SHOPPINGCAR: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default shoppingCarReducer;
