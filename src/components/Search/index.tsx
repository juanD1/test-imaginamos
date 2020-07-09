import React from 'react';
import SearchIcon from 'assets/icons/search.svg';
import { Img } from 'styles/globalStyles';
import { Wrapper, Input } from './styles';

type Props = {
  toggle: boolean;
};

const Search = ({ toggle }: Props) => (
  <Wrapper hiddenOnResponsive toggle={toggle}>
    <Input type="text" placeholder="Search" />
    <Img
      width="15px"
      height="15px"
      src={SearchIcon}
      alt="search"
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        top: '1.1rem',
        left: '1.1rem',
      }}
    />
  </Wrapper>
);

export default Search;
