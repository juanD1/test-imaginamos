import React, { useState, useEffect } from 'react';
import { useMedia } from 'react-media';
import { MEDIA_QUERIES } from 'constants/mediaQueries';
import Header from 'components/Header';
import Content from 'containers/Content';
import Panel from 'containers/Panel';

const Home = () => {
  const matches = useMedia({ queries: MEDIA_QUERIES });
  const [showShoppingCar, setShowShoppingCar] = useState<boolean>(
    matches.small ? false : true,
  );

  useEffect(() => {
    matches.small && setShowShoppingCar(false);
  }, [matches]);

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
