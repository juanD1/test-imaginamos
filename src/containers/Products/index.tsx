import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from 'context/AuthContext';
import ProductCard from 'components/ProductCard';
import actions from 'states/actions';
import { Categories as TypeCategory } from 'types/categories';
import { Products as TypeProduct } from 'types/products';
import { PRODUCTS } from 'constants/products';
import { Wrapper, Label } from 'styles/globalStyles';

type Props = {
  category: TypeCategory;
};

const Products = ({ category }: Props) => {
  const user = useContext(AuthContext);
  const dispatch = useDispatch();

  const filteredProducts =
    category.name === 'All'
      ? PRODUCTS
      : PRODUCTS.filter(product => product.category === category.name);

  const addToShoppingCar = (product: TypeProduct) =>
    user && dispatch(actions.shoppingCar.addProductRequest(product));

  return (
    <Wrapper display="flex" padding="35px 0" overFlow="auto">
      {!filteredProducts.length ? (
        <Label
          fontWeight={600}
          fontSize="26px"
          letterSpacing="0"
          padding="0 10px 0 0"
          margin="auto 0"
        >
          There aren't products with selected category
        </Label>
      ) : (
        filteredProducts.map(
          ({
            id,
            name,
            qualification,
            time,
            price,
            quantity,
            category,
            image,
          }) => (
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
                  category,
                })
              }
            />
          ),
        )
      )}
      {/* {filteredProducts.length &&
        
        } */}
    </Wrapper>
  );
};

export default Products;
