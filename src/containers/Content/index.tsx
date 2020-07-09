import React from 'react';
import { GlobalProps } from 'types/globalTypes';
import Nav from 'containers/Nav';
import { Wrapper } from 'styles/globalStyles';

const Content = ({ children }: GlobalProps) => (
  <div className="col col-lg-8" style={{ backgroundColor: 'cyan' }}>
    <Wrapper padding="50px 30px">
      {/* Nav */}
      <Nav />
      {/* News */}
      {/* Categories */}
      {/* Products */}
    </Wrapper>
  </div>
);

export default Content;
