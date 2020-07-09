import React from 'react';
import { GlobalProps } from 'types/globalTypes';
import Login from 'containers/Login';
import { Wrapper } from 'styles/globalStyles';

const Panel = ({ children }: GlobalProps) => (
  <div className="col col-lg-4" style={{ borderLeft: '1px solid gray' }}>
    <Wrapper padding="25px 30px" display="block">
      <Login />
    </Wrapper>
    {/* Car Payment */}
  </div>
);

export default Panel;
