import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #ffefe0;
  border-radius: 30px;
  display: block;
  margin: 40px 0 0;
  height: 150px;
  padding: 0 30px;
`;

export const LearnMoreContiner = styled.div`
  display: flex;
  margin-top: 100%;

  @media (max-width: 992px) and (min-width: 320px) {
    margin-top: 0;
  }
`;
