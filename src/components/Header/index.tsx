import React from 'react';
import Nav from 'components/Nav';
import SquareBtn from 'components/SquareBtn';
import Login from 'components/Login';
import { Wrapper } from 'styles/globalStyles';

type Props = {
  handleDisplay: () => void;
};

const Header = ({ handleDisplay }: Props) => {
  return (
    <Wrapper padding="25px 30px" display="flex">
      <Nav />
      <Wrapper
        padding="25px"
        display="flex"
        right="0"
        top="0"
        position="absolute"
      >
        <Login />
        <SquareBtn handleClick={handleDisplay} />
      </Wrapper>
    </Wrapper>
  );
};
export default Header;
