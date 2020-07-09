import React from 'react';
import { GlobalProps } from 'types/globalTypes';
import Login from 'containers/Login';
import { Wrapper } from 'styles/globalStyles';

const Panel = ({ children }: GlobalProps) => (
  <div className="col col-lg-4" style={{ backgroundColor: 'red' }}>
    <Wrapper padding="50px 30px">
      <Login />
    </Wrapper>
  </div>
);

export default Panel;
