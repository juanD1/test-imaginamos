import React from 'react';
import { Categories } from 'types/categories';
import { Wrapper, ImgWrapper } from './styles';
import { Img, Label } from 'styles/globalStyles';

type CategoryBtnProps = {
  actived: boolean;
  handleClick(e: any): any;
};

const CategoryBtn = ({
  categoryKey,
  name,
  icon,
  actived,
  handleClick,
}: CategoryBtnProps & Categories) => {
  return (
    <Wrapper
      actived={actived}
      onClick={() => handleClick({ categoryKey, name, icon })}
    >
      <ImgWrapper>
        <Img src={icon} width="70%" margin="auto" />
      </ImgWrapper>
      <Label fontWeight={600} fontSize="14px" letterSpacing="0" padding="15%">
        {name}
      </Label>
    </Wrapper>
  );
};

export default CategoryBtn;
