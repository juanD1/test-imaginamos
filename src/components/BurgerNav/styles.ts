import styled from 'styled-components';

type ImgProps = {
  float?: string;
};

export const Img = styled.img`
  float: ${(props: ImgProps) => props.float};
`;
