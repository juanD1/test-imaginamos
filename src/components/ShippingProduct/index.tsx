import React from 'react';
import { Products } from 'types/products';
import { Wrapper, Label, Img } from 'styles/globalStyles';

const ShippingProduct = ({ productName, quantity, price, image }: Products) => (
  <Wrapper display="flex" padding="10px 0">
    <Img
      width="80px"
      height="60px"
      src={image}
      alt="select icon"
      margin="auto 0"
      borderRadius="15px"
    />
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      padding="15px 10px"
      margin="auto"
    >
      {quantity}
    </Label>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      padding="15px 10px"
      margin="auto"
    >
      x
    </Label>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      padding="15px 10px"
      margin="auto"
    >
      {productName}
    </Label>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      padding="15px 10px"
      margin="auto"
    >
      ${price}
    </Label>
  </Wrapper>
);

export default ShippingProduct;
