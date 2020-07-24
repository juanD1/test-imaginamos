import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { REMOVE_PRODUCT_REQUEST } from 'states/shoppingCar/constants';
import { Products } from 'types/products';
import { State } from 'types/states';
import ShippingProduct from 'components/ShippingProduct';
import Checkout from 'components/Checkout';
import Delivery from 'components/Delivery';
import { Label } from 'styles/globalStyles';

const initialState = {
  productKey: 0,
  productName: '',
  quantity: 0,
  price: 0,
  image: '',
};

const ShippingList = () => {
  const [product, setProduct] = useState<Products>(initialState);

  const products = useSelector<State, Products[]>(
    state => state.shoppingCar.products,
  );
  const total = useSelector<State, number>(state => state.shoppingCar.total);
  const shoppingCarAction = useSelector<State, string | null>(
    state => state.shoppingCar.shoppingCarAction,
  );

  useEffect(() => {
    (!products.length || shoppingCarAction === REMOVE_PRODUCT_REQUEST) &&
      setProduct(initialState);
  }, [products, shoppingCarAction]);

  return (
    <>
      {products.length && (
        <div>
          {products.map(
            ({ productKey, productName, quantity, price, image }) => (
              <ShippingProduct
                key={productKey}
                productKey={productKey}
                productName={productName}
                quantity={quantity}
                price={price}
                image={image}
                actived={product ? product.productKey === productKey : false}
                handleClick={() =>
                  setProduct({
                    productKey,
                    productName,
                    quantity,
                    price,
                    image,
                  })
                }
              />
            ),
          )}
          <Delivery />
          <div
            className="row justify-content-between"
            style={{ marginTop: 50 }}
          >
            <div className="col-4">
              <Label
                fontWeight={400}
                fontSize="24px"
                letterSpacing="0"
                float="left"
              >
                Total
              </Label>
            </div>
            <div className="col-4">
              <Label
                fontWeight={600}
                fontSize="26px"
                letterSpacing="0"
                float="right"
              >
                ${total.toFixed(2)}
              </Label>
            </div>
          </div>
        </div>
      )}
      <Checkout product={product} />
    </>
  );
};

export default ShippingList;
