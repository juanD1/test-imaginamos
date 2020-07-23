import styled from 'styled-components';

type MainWrapperProps = {
  padding?: string;
  height?: string;
};

export const MainWrapper = styled.div`
  height: ${(props: MainWrapperProps) => props.height};
  background-color: #ffefe0;
  border-radius: 30px;
  display: block;
  margin: 0 40px 0;
  height: 150px;
  padding: ${(props: MainWrapperProps) => props.padding};
  margin-bottom: 35px;
`;

export const LearnMoreContiner = styled.div`
  display: flex;
  margin-top: 7vw;

  @media (max-width: 992px) and (min-width: 320px) {
    margin-top: 0;
  }
`;
