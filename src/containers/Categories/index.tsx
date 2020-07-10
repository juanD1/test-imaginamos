import React, { useState } from 'react';
import CategoriesHeader from 'components/CategoriesHeader';
import { Categories as TypeCategory } from 'types/categories';
import CategoryBtn from 'components/CategoryBtn';
import { CATEGORIES } from 'constants/categories';

const Categories = () => {
  const [category, setCategory] = useState<TypeCategory>({
    categoryKey: 4,
    name: '',
    icon: '',
  });

  const selectCategory = (categoryElement: TypeCategory) => {
    setCategory(categoryElement);
  };

  return (
    <>
      <CategoriesHeader />
      {CATEGORIES.map(({ id, name, icon }) => (
        <CategoryBtn
          key={id}
          categoryKey={id}
          name={name}
          icon={icon}
          actived={id === category.categoryKey}
          handleClick={(categoryElement: TypeCategory) =>
            selectCategory(categoryElement)
          }
        />
      ))}
    </>
  );
};

export default Categories;
