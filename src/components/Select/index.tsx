import React from 'react';
import { Label, Img } from 'styles/globalStyles';
import { Wrapper, SelectWrapper, StyledSelect } from './styles';

type Props = {
  icon: string;
  label: string;
  options: Array<string>;
  backgroundColor?: string;
  color?: string;
};

const Select = ({ icon, label, options, color, backgroundColor }: Props) => {
  return (
    <Wrapper>
      <SelectWrapper>
        <StyledSelect backgroundColor={backgroundColor} color={color}>
          {options.map((option, key) => (
            <option key={key}>{option}</option>
          ))}
        </StyledSelect>
      </SelectWrapper>
      <span
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          top: '.6rem',
          left: '.6rem',
        }}
      >
        <span className="d-flex">
          <Img
            width="15px"
            height="15px"
            src={icon}
            alt="select icon"
            margin="auto"
          />
          <Label
            fontWeight={400}
            fontSize="14px"
            color={color}
            letterSpacing="0"
            padding="0 0 0 10px"
          >
            {label}
          </Label>
        </span>
      </span>
    </Wrapper>
  );
};

export default Select;
