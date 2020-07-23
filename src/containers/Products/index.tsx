import React from 'react';
import { useDispatch } from 'react-redux';
import ProductCard from 'components/ProductCard';
import actions from 'states/actions';
import { Products as TypeProduct } from 'types/products';
import { PRODUCTS } from 'constants/products';
import { Wrapper } from 'styles/globalStyles';

const Products = () => {
  const dispatch = useDispatch();

  const addToShoppingCar = (product: TypeProduct) =>
    dispatch(actions.shoppingCar.addProductRequest(product));

  return (
    <Wrapper display="flex" padding="35px 0" overFlow="auto">
      {PRODUCTS.map(
        ({ id, name, qualification, time, price, quantity, image }) => (
          <ProductCard
            key={id}
            productKey={id}
            productName={name}
            qualification={qualification}
            time={time}
            price={price}
            quantity={quantity}
            image={image}
            handleClick={() =>
              addToShoppingCar({
                productKey: id,
                productName: name,
                qualification,
                time,
                price,
                quantity,
                image,
              })
            }
          />
        ),
      )}
    </Wrapper>
  );
};

export default Products;
