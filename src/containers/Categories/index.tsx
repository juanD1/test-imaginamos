import React, { useState } from 'react';
import CategoriesHeader from 'components/CategoriesHeader';

const Categories = () => {
  const [category, setCategory] = useState<object | null>(null);
  return <CategoriesHeader />;
};

export default Categories;
