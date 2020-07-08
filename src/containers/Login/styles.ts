import styled from 'styled-components';

type ImgProps = {
  currentUser: boolean;
};

export const Img = styled.img`
  width: ${(props: ImgProps) => (props.currentUser ? '30px' : '25px')};
  height: ${(props: ImgProps) => (props.currentUser ? '30px' : '25px')};
  float: right;
  margin: 5px;
`;
