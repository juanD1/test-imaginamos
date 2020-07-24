import React from 'react';
import { useMedia } from 'react-media';
import { MEDIA_QUERIES } from 'constants/mediaQueries';
import ShoppingCar from 'containers/ShoppingCar';

const Panel = () => {
  const matches = useMedia({ queries: MEDIA_QUERIES });
  return (
    <>
      {matches.large && (
        <div className="col col-lg-4" style={{ borderLeft: '1px solid gray' }}>
          <ShoppingCar />
        </div>
      )}
      {matches.small && <ShoppingCar mobileDesign />}
    </>
  );
};

export default Panel;
