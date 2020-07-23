import React from 'react';
import { Products } from 'types/products';
import start from 'assets/icons/start.svg';
import { Wrapper, Img, Label } from 'styles/globalStyles';
import { TimeWrapper } from './styles';

type Props = Products & {
  handleClick: () => void;
};

const ProductCard = ({
  productName,
  qualification,
  time,
  price,
  image,
  handleClick,
}: Props) => (
  <Wrapper padding="0 25px 0 0" cursor="pointer" onClick={handleClick}>
    <div style={{ position: 'relative' }}>
      <Img src={image} alt="product" width="250px" borderRadius="25px" />
      <TimeWrapper>
        <Label fontWeight={600} fontSize="14px" letterSpacing="0">
          {time}
        </Label>
      </TimeWrapper>
    </div>
    <div>
      <Label
        fontWeight={600}
        fontSize="18px"
        letterSpacing="0"
        padding="25px 0 10px"
      >
        {productName}
      </Label>
      <div className="d-flex">
        <Img src={start} width="14px" />
        <Label
          fontWeight={550}
          fontSize="14px"
          letterSpacing="0"
          padding="0 15px 0 10px"
        >
          {qualification}
        </Label>
        <Label fontWeight={400} fontSize="14px" letterSpacing="0">
          ${price}
        </Label>
      </div>
    </div>
  </Wrapper>
);

export default ProductCard;
