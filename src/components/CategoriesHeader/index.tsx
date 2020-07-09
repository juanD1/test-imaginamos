import React from 'react';
import Select from 'components/Select';
import hamburger from 'assets/icons/hamburger.svg';
import clockWhite from 'assets/icons/clockWhite.svg';
import { Label, Img } from 'styles/globalStyles';

const options = ['Now', 'Later', 'More'];

const CategoriesHeader = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-4">
        <div className="d-flex">
          <Label
            fontWeight={600}
            fontSize="26px"
            letterSpacing="0"
            padding="0 10px 0 0"
            margin="auto 0"
          >
            Restaurants
          </Label>
          <Img src={hamburger} alt="hamburger" height="25px" />
        </div>
      </div>
      <div className="col-4">
        <Select
          icon={clockWhite}
          label="Delivery:"
          options={options}
          backgroundColor="tomato"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default CategoriesHeader;
