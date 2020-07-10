import React from 'react';
import Shipping from 'components/Shipping';
import ShippingList from 'components/ShippingList';
import Checkout from 'components/Checkout';
import { Label, Img } from 'styles/globalStyles';
import emoji from 'assets/icons/emoji.png';

const ShoppingCar = () => (
  <div style={{ padding: '100px 50px 0' }}>
    <div>
      <div className="d-flex">
        <Label
          fontWeight={600}
          fontSize="26px"
          letterSpacing="0"
          padding="0 10px 0 0"
          margin="auto 0"
        >
          My
        </Label>
        <Img src={emoji} alt="emoji" height="25px" />
      </div>
      <Label
        fontWeight={600}
        fontSize="26px"
        letterSpacing="0"
        padding="0 10px 0 0"
        margin="auto 0"
      >
        Orders
      </Label>
    </div>
    <Shipping />
    <ShippingList />
    <Checkout />
  </div>
);

export default ShoppingCar;
