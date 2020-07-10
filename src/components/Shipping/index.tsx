import React from 'react';
import clockPeach from 'assets/icons/clockPeach.svg';
import { Label, Img } from 'styles/globalStyles';
import { Wrapper } from './styles';

const Shipping = () => (
  <Wrapper>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      margin="0 0 35px"
      float="left"
      color="#fff"
    >
      625 St Markcs Ave
    </Label>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      margin="0 0 35px"
      float="right"
      color="#ffc78f"
    >
      Edit
    </Label>
    <div className="d-flex" style={{ position: 'absolute', bottom: 0 }}>
      <Img
        width="15px"
        height="15px"
        src={clockPeach}
        alt="select icon"
        margin="auto"
      />
      <Label
        fontWeight={600}
        fontSize="14px"
        letterSpacing="0"
        padding="15px 10px"
        color="#fff"
      >
        35 min
      </Label>
    </div>
    <Label
      fontWeight={600}
      fontSize="14px"
      letterSpacing="0"
      padding="15px 0"
      float="right"
      color="#ffc78f"
      position="absolute"
      right="30px"
      bottom="0"
    >
      Choose time
    </Label>
  </Wrapper>
);

export default Shipping;
