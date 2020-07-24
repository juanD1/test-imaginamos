import React, { useState } from 'react';
import News from 'components/News';
import { Categories as TypeCategory } from 'types/categories';
import Categories from 'containers/Categories';
import Products from 'containers/Products';
import { Wrapper } from 'styles/globalStyles';

const Content = () => {
  const [category, setCategory] = useState<TypeCategory>({
    categoryKey: 1,
    name: 'All',
    icon: '',
  });

  const selectCategory = (categoryElement: TypeCategory) => {
    setCategory(categoryElement);
  };

  return (
    <div className="col">
      <Wrapper padding="25px 30px">
        <div className="container"></div>
        <div className="row">
          <div className="col">
            <News />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Categories category={category} selectCategory={selectCategory} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Products category={category} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Content;
