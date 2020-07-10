import React, { useState } from 'react';
import Header from 'components/Header';
import Content from 'containers/Content';
import Panel from 'containers/Panel';

const Home = () => {
  const [showShoppingCar, setShowShoppingCar] = useState<boolean>(true);

  const handleDisplay = () => {
    setShowShoppingCar(!showShoppingCar);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Header handleDisplay={handleDisplay} />
      </div>
      <div className="row">
        <Content />
        {showShoppingCar && <Panel />}
      </div>
    </div>
  );
};

export default Home;
