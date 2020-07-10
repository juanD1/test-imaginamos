import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #ffefe0;
  border-radius: 30px;
  display: block;
  margin: 0 40px 0;
  height: 150px;
  padding: 0 30px;
  margin-bottom: 35px;
`;

export const LearnMoreContiner = styled.div`
  display: flex;
  margin-top: 7vw;

  @media (max-width: 992px) and (min-width: 320px) {
    margin-top: 0;
  }
`;
