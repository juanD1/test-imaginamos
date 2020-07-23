import styled from 'styled-components';

type MainWrapperProps = {
  padding?: string;
  height?: string;
  margin?: string;
};

export const MainWrapper = styled.div`
  height: ${(props: MainWrapperProps) => props.height};
  background-color: #ffefe0;
  border-radius: 30px;
  display: block;
  margin: ${(props: MainWrapperProps) => props.margin};
  padding: ${(props: MainWrapperProps) => props.padding};
  margin-bottom: 35px;
`;

export const LearnMoreContiner = styled.div`
  display: flex;
  margin-top: 7vw;

  @media (max-width: 720px) and (min-width: 320px) {
    margin-top: 10px;
  }
`;
