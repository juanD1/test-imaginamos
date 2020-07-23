import React from 'react';
import surprise from 'assets/images/d.png';
import arrowLineOrange from 'assets/icons/arrowLineOrange.svg';
import { Img, Label } from 'styles/globalStyles';
import { MainWrapper, LearnMoreContiner } from '../styles';

const News = () => (
  <MainWrapper height="auto">
    <div style={{ display: 'inline-block', margin: '30px 50px' }}>
      <span className="d-flex">
        <Label
          fontWeight={600}
          fontSize="26px"
          lineHeight="29px"
          letterSpacing="0"
          color="#FF7F50"
          padding="0 15px 10px 0"
        >
          $0 delivery for 30 days!
        </Label>
        <Img src={surprise} alt="surprise" height="25px" />
      </span>
      <Label fontWeight={400} fontSize="14px" color="#5f6368" letterSpacing="0">
        $0 delivery fee order over $10 fro 30 days
      </Label>
      <LearnMoreContiner>
        <Label
          fontWeight={600}
          fontSize="14px"
          color="#FF7F50"
          letterSpacing="0"
          bottom="50px"
          right="20px"
          padding="0 5px 0 0"
        >
          Learn more
        </Label>
        <Img src={arrowLineOrange} alt="arrow line" height="15px" />
      </LearnMoreContiner>
    </div>
  </MainWrapper>
);

export default News;
