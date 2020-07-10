import React from 'react';
import { SHOPPING_LIST } from 'constants/shoppingList';
import ShippingProduct from 'components/ShippingProduct';

const ShippingList = () => (
  <div>
    {SHOPPING_LIST.map(({ id, name, quantity, price, image }) => (
      <ShippingProduct
        key={id}
        productKey={id}
        productName={name}
        quantity={quantity}
        price={price}
        image={image}
      />
    ))}
  </div>
);

export default ShippingList;
