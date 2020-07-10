import React from 'react';
import { GlobalProps } from 'types/globalTypes';
import Nav from 'containers/Nav';
import News from 'components/News';
import Categories from 'containers/Categories';
import Products from 'containers/Products';
import { Wrapper } from 'styles/globalStyles';

const Content = ({ children }: GlobalProps) => (
  <div className="col col-lg-8">
    <Wrapper padding="25px 30px">
      <Nav />
      <div className="container"></div>
      <div className="row">
        <div className="col">
          <News />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Categories />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Products />
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Content;
