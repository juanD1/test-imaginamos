import React from 'react';
import { Label } from 'styles/globalStyles';
import { Wrapper } from './styles';

type Props = {
  handleClick(): void;
};

const SquareBtn = ({ handleClick }: Props) => (
  <Wrapper onClick={handleClick}>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      margin="auto"
      display="table-cell"
      verticalAlign="middle"
    >
      3
    </Label>
  </Wrapper>
);

export default SquareBtn;
