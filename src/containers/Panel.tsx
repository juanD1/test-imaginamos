import React from 'react';
import { GlobalProps } from 'types/globalTypes';
import Login from './Login';

const Panel = ({ children }: GlobalProps) => (
  <div className="col col-md-4" style={{ backgroundColor: 'red' }}>
    <Login />
  </div>
);

export default Panel;
