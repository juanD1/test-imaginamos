import React from 'react';
import Shipping from 'components/Shipping';
import ShippingList from 'components/ShippingList';
import { Wrapper, Label, Img } from 'styles/globalStyles';
import emoji from 'assets/icons/emoji.png';

type Props = {
  mobileDesign?: boolean;
};

const ShoppingCar = ({ mobileDesign }: Props) => (
  <Wrapper
    padding={!mobileDesign ? '100px 50px 0' : '100px 6vw 0'}
    zIndex={mobileDesign ? 1 : 0}
    backgroundColor={mobileDesign ? 'white' : ''}
    position={mobileDesign ? 'absolute' : ''}
    height={mobileDesign ? '135vh' : ''}
    right={mobileDesign ? '0' : ''}
  >
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
  </Wrapper>
);

export default ShoppingCar;
