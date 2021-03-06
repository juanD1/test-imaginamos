import styled from 'styled-components';

type WrapperProps = {
  mobileDesign?: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  margin-top: ${(props: WrapperProps) => props.mobileDesign && '10px'};
`;

type SelectWrapperProps = {
  mobileDesign?: boolean;
};

export const SelectWrapper = styled.div`
  position: relative;
  width: ${(props: SelectWrapperProps) =>
    props.mobileDesign ? '55vw' : '100%'};

  ::after {
    font-family: FontAwesome;
    content: '\f107';
    font-size: 28px;
    position: absolute;
    right: 20px;
    color: #fff;
    pointer-events: none;
  }
`;

type StyledSelectProps = {
  backgroundColor?: string;
  color?: string;
};

export const StyledSelect = styled.select`
  width: 100%;
  border-radius: 50px;
  padding: 7px 0 7px 100px;
  outline: none !important;
  border: 0;
  background-color: ${(props: StyledSelectProps) =>
    props.backgroundColor ? `${props.backgroundColor}` : '#dddddd'};
  color: ${(props: StyledSelectProps) => props.color && props.color};

  /* Here's the code we need */
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
`;
