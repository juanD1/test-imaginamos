import styled from 'styled-components';

type WapperProps = {
  toggle: boolean;
  hiddenOnResponsive?: boolean;
};

export const Wrapper = styled.div`
  position: relative;

  @media (max-width: 768px) and (min-width: 320px) {
    display: ${(props: WapperProps) =>
      props.hiddenOnResponsive && !props.toggle ? 'none' : 'inline-block'};
    right: 30px;
    top: 45px;
  }
`;

export const Input = styled.input`
  padding-left: 50px;
  border-radius: 10px;
  outline: none !important;
  border: 0;
  height: 35px;
  background-color: #dddddd;

  /* No greater than 900px, no less than 400px */
  @media (max-width: 992px) and (min-width: 320px) {
    width: 120px;
  }
  @media (max-width: 992px) and (min-width: 768px) {
    width: auto;
  }
  @media (max-width: 1440px) and (min-width: 992px) {
    width: 500px;
  }
`;
