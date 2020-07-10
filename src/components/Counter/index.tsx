import React, { useState } from 'react';
import { Label } from 'styles/globalStyles';
import { Wrapper } from './styles';

const Counter = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const addQuantity = () => setQuantity(prevState => prevState + 1);
  const reduceQuantity = () =>
    quantity > 0 && setQuantity(prevState => prevState - 1);

  return (
    <Wrapper>
      <Label
        fontWeight={500}
        fontSize="18px"
        letterSpacing="0"
        padding="15px 10px"
        margin="auto"
        cursor="pointer"
        onClick={reduceQuantity}
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
        {quantity}
      </Label>
      <Label
        fontWeight={500}
        fontSize="18px"
        letterSpacing="0"
        padding="15px 10px"
        margin="auto"
        cursor="pointer"
        onClick={addQuantity}
      >
        +
      </Label>
    </Wrapper>
  );
};

export default Counter;
