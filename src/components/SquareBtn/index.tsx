import React from 'react';
import { useSelector } from 'react-redux';
import { Products } from 'types/products';
import { State } from 'types/states';
import { Label } from 'styles/globalStyles';
import { Wrapper } from './styles';

type Props = {
  handleClick(): void;
};

const SquareBtn = ({ handleClick }: Props) => {
  const products = useSelector<State, Products[]>(
    state => state.shoppingCar.products,
  );

  return (
    <Wrapper onClick={handleClick}>
      <Label
        fontWeight={600}
        fontSize="14px"
        letterSpacing="0"
        margin="auto"
        display="table-cell"
        verticalAlign="middle"
      >
        {products && products.length}
      </Label>
    </Wrapper>
  );
};

export default SquareBtn;
