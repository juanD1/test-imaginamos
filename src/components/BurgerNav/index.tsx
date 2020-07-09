import React from 'react';
import list from 'assets/icons/list.svg';
import { Img } from './styles';

type Props = {
  float?: string;
  handleClick(): void;
};

const BurgerNav = ({ float, handleClick }: Props) => (
  <Img src={list} alt="main menu" float={float} onClick={handleClick} />
);

export default BurgerNav;
