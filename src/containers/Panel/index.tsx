import React from 'react';
import { GlobalProps } from 'types/globalTypes';

import ShoppingCar from 'containers/ShoppingCar';

const Panel = ({ children }: GlobalProps) => {
  // const [showShoppingCar, setShowShoppingCar] = useState<boolean>(false);

  // const handleDisplay = () => {
  //   setShowShoppingCar(!showShoppingCar);
  // };

  return (
    <div className="col col-lg-4" style={{ borderLeft: '1px solid gray' }}>
      <ShoppingCar />
      {/* <Wrapper padding="25px 30px" display="flex" margin="auto" float="right">
          <Login />
          <SquareBtn handleClick={handleDisplay} />
        </Wrapper> */}
      {/* {showShoppingCar && <ShoppingCar />} */}
    </div>
  );
};

export default Panel;
