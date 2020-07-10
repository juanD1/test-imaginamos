import styled from 'styled-components';

type WrapperProps = {
  toggle: boolean;
};

export const Wrapper = styled.div`
  /* display: block; */
  @media (max-width: 768px) and (min-width: 320px) {
    display: ${(props: WrapperProps) =>
      !props.toggle ? 'none' : 'inline-block'};
  }
`;
