import React from 'react';
import Content from 'containers/Content';
import Panel from 'containers/Panel';

const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <Content />
      <Panel />
    </div>
  </div>
);

export default Home;
