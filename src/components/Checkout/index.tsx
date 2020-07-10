import React from 'react';
import Counter from 'components/Counter';
import arrowLine from 'assets/icons/arrowLine.svg';
import { Label, Img } from 'styles/globalStyles';
import { Wrapper, CheckoutWrapper } from './styles';

const Checkout = () => (
  <Wrapper>
    <div className="row justify-content-between">
      <div className="col align-self-center">
        <Label
          fontWeight={500}
          fontSize="14px"
          letterSpacing="0"
          margin="0 0 10px"
        >
          Persons
        </Label>
        <Counter />
      </div>
      <div className="col">
        <CheckoutWrapper>
          <Label
            fontWeight={600}
            fontSize="16px"
            letterSpacing="0"
            margin="auto"
          >
            Checkout
          </Label>
          <Img
            width="25px"
            height="25px"
            src={arrowLine}
            alt="arrow right"
            margin="auto 0"
          />
        </CheckoutWrapper>
      </div>
    </div>
  </Wrapper>
);

export default Checkout;
