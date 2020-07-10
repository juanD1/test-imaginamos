import React from 'react';
import truck from 'assets/icons/truck.svg';
import { Wrapper, Label, Img } from 'styles/globalStyles';
import { IconWrapper } from './styles';

const Delivery = () => (
  <Wrapper display="flex" padding="10px 0">
    <IconWrapper>
      <Img
        width="40%"
        height="100%"
        src={truck}
        alt="delivery icon"
        margin="auto"
      />
    </IconWrapper>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      padding="15px 10px"
      margin="auto"
    >
      Delivery
    </Label>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      padding="15px 10px"
      margin="auto"
    >
      $0.00
    </Label>
  </Wrapper>
);

export default Delivery;
