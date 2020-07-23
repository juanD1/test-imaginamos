import styled from 'styled-components';

type WrapperProps = {
  actived: boolean;
  mobileDesign?: boolean;
};

export const Wrapper = styled.div`
  width: ${(props: WrapperProps) => (props.mobileDesign ? '100%' : '9.5%')};
  height: 150px;
  background-color: ${(props: WrapperProps) =>
    props.actived ? '#ffd645' : 'white'};
  border-radius: 50px;
  padding-top: 10px;
  display: block;
  text-align: center;
  margin-right: ${(props: WrapperProps) =>
    props.mobileDesign ? '20px' : 'auto'};
  display: inline-block;
  cursor: pointer;

  -webkit-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const ImgWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  margin: auto;
  padding-top: 10px;
  border: 1px solid #9f9f9f;
`;
