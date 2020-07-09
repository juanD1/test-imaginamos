import React, { useState } from 'react';
import BurgerNav from 'components/BurgerNav';
import Search from 'components/Search';
import { Label } from 'styles/globalStyles';
import { Wrapper } from './styles';

const Nav = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Wrapper className="d-flex" toggle={toggle}>
      <BurgerNav float="left" handleClick={() => setToggle(!toggle)} />
      <Label
        fontWeight={600}
        fontSize="22px"
        letterSpacing="0"
        margin="auto 70px auto 35px"
        padding="15px 0"
        hiddenOnResponsive
      >
        Chukwudi
      </Label>
      <Search toggle={toggle} />
    </Wrapper>
  );
};

export default Nav;
