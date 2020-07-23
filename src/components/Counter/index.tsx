import React, { useState } from 'react';
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
  const [quantity, setQuantity] = useState<number>(1);

  // const addQuantity = () => setQuantity(prevState => prevState + 1);

  // const reduceQuantity = () =>
  //   quantity > 0 && setQuantity(prevState => prevState - 1);

  const AddQuantityProduct = (product: Products) =>
    dispatch(actions.shoppingCar.AddQuantityRequest(product));

  return (
    <Wrapper>
      <Label
        fontWeight={500}
        fontSize="18px"
        letterSpacing="0"
        padding="15px 10px"
        margin="auto"
        cursor="pointer"
        // onClick={reduceQuantity}
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
