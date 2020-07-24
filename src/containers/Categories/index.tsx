import React from 'react';
import CategoriesHeader from 'components/CategoriesHeader';
import { Categories as TypeCategory } from 'types/categories';
import CategoryBtn from 'components/CategoryBtn';
import { CATEGORIES } from 'constants/categories';

type Props = {
  category: TypeCategory;
  selectCategory: (categoryElement: TypeCategory) => void;
};

const Categories = ({ category, selectCategory }: Props) => (
  <>
    <CategoriesHeader />
    <div style={{ display: 'flex', overflow: 'auto', height: '100%' }}>
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
    </div>
  </>
);

export default Categories;
