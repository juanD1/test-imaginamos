import React from 'react';
import { useDispatch } from 'react-redux';
import actions from 'states/actions';
import { Products } from 'types/products';
import { Label } from 'styles/globalStyles';
import { Wrapper } from './styles';

type Props = {
  product: Products;
};

const Counter = (props: Props) => {
  const dispatch = useDispatch();

  const AddQuantityProduct = (product: Products) =>
    dispatch(actions.shoppingCar.AddQuantityRequest(product));

  const SubtractQuantityProduct = (product: Products) =>
    product.quantity !== 1
      ? dispatch(actions.shoppingCar.SubtractQuantityRequest(product))
      : dispatch(actions.shoppingCar.removeProductRequest(product));

  return (
    <Wrapper>
      <Label
        fontWeight={500}
        fontSize="18px"
        letterSpacing="0"
        padding="15px 10px"
        margin="auto"
        cursor="pointer"
        onClick={() => SubtractQuantityProduct(props.product)}
      >
        -
      </Label>
      <Label
        fontWeight={500}
        fontSize="18px"
        letterSpacing="0"
        padding="15px 10px"
        margin="auto"
      >
        {props.product && props.product.quantity}
      </Label>
      <Label
        fontWeight={500}
        fontSize="18px"
        letterSpacing="0"
        padding="15px 10px"
        margin="auto"
        cursor="pointer"
        onClick={() => AddQuantityProduct(props.product)}
      >
        +
      </Label>
    </Wrapper>
  );
};

export default Counter;
