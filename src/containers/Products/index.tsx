import React from 'react';
import ProductCard from 'components/ProductCard';
import { PRODUCTS } from 'constants/products';
import { Wrapper } from 'styles/globalStyles';

const Products = () => (
  <Wrapper display="flex" padding="35px 0" overFlow="auto">
    {PRODUCTS.map(({ id, name, qualification, time, price, image }) => (
      <ProductCard
        key={id}
        productKey={id}
        productName={name}
        qualification={qualification}
        time={time}
        price={price}
        image={image}
      />
    ))}
  </Wrapper>
);

export default Products;
