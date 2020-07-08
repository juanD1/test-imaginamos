import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  background: #fff;
  border: 1px solid #ccc;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  color: #000;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  outline: none;
  overflow: hidden;
  position: absolute;
  right: 8px;
  top: 62px;
  padding: 10px 15px;
`;

export const WrapperUserInfo = styled.div`
  display: inline-block;
  padding: 20px 0;
`;

export const Img = styled.img`
  display: block;
  margin: auto;
`;

type LabelProps = {
  fontWeight: number;
  fontSize: string;
  lineHeight?: string;
  color?: string;
  display?: string;
};

export const Label = styled.span`
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-stretch: normal;
  line-height: ${(props: LabelProps) => props.lineHeight || '19px'};
  letter-spacing: 0.29px;
  font-weight: ${(props: LabelProps) => props.fontWeight};
  font-size: ${(props: LabelProps) => props.fontSize};
  color: ${(props: LabelProps) => props.color};
  display: ${(props: LabelProps) => props.display || 'block'};
`;
