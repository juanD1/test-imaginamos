import React from 'react';
import { SHOPPING_LIST } from 'constants/shoppingList';
import ShippingProduct from 'components/ShippingProduct';
import Delivery from 'components/Delivery';
import { Label } from 'styles/globalStyles';

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
    <Delivery />
    <div className="row justify-content-between" style={{ marginTop: 50 }}>
      <div className="col-4">
        <Label fontWeight={400} fontSize="24px" letterSpacing="0" float="left">
          Total
        </Label>
      </div>
      <div className="col-4">
        <Label fontWeight={600} fontSize="26px" letterSpacing="0" float="right">
          $25.97
        </Label>
      </div>
    </div>
  </div>
);

export default ShippingList;
