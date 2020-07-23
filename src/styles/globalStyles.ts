import styled from 'styled-components';

type WrapperProps = {
  padding?: string;
  display?: string;
  position?: string;
  overFlow?: string;
  margin?: string;
  cursor?: string;
  float?: string;
  right?: string;
  top?: string;
  actived?: boolean;
};

export const Wrapper = styled.div`
  padding: ${(props: WrapperProps) => props.padding};
  display: ${(props: WrapperProps) => props.display};
  margin: ${(props: ImgProps) => props.margin};
  position: ${(props: WrapperProps) => props.position};
  float: ${(props: WrapperProps) => props.float};
  overflow: ${(props: WrapperProps) => props.overFlow};
  right: ${(props: WrapperProps) => props.right};
  top: ${(props: WrapperProps) => props.top};
  border: ${(props: WrapperProps) => props.actived && '1px solid yellow'};
  border-radius: ${(props: WrapperProps) => props.actived && '20px'};
  cursor: ${(props: WrapperProps) => props.cursor};
`;

type ImgProps = {
  width?: string;
  height?: string;
  float?: string;
  margin?: string;
  display?: string;
  position?: string;
  padding?: string;
  bottom?: string;
  borderRadius?: string;
};

export const Img = styled.img`
  width: ${(props: ImgProps) => props.width};
  height: ${(props: ImgProps) => props.height};
  float: ${(props: ImgProps) => props.float};
  margin: ${(props: ImgProps) => props.margin};
  display: ${(props: ImgProps) => props.display || 'block'};
  position: ${(props: ImgProps) => props.position};
  padding: ${(props: ImgProps) => props.padding};
  bottom: ${(props: ImgProps) => props.bottom};
  border-radius: ${(props: ImgProps) => props.borderRadius};
`;

type LabelProps = {
  fontWeight: number;
  fontSize: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
  display?: string;
  margin?: string;
  padding?: string;
  hiddenOnResponsive?: boolean;
  bottom?: string;
  right?: string;
  position?: string;
  verticalAlign?: string;
  float?: string;
  cursor?: string;
};

export const Label = styled.span`
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-stretch: normal;
  line-height: ${(props: LabelProps) => props.lineHeight || '19px'};
  letter-spacing: ${(props: LabelProps) => props.letterSpacing || '0.29px'};
  font-weight: ${(props: LabelProps) => props.fontWeight};
  font-size: ${(props: LabelProps) => props.fontSize};
  color: ${(props: LabelProps) => props.color};
  display: ${(props: LabelProps) => props.display || 'block'};
  margin: ${(props: LabelProps) => props.margin};
  padding: ${(props: LabelProps) => props.padding};
  bottom: ${(props: LabelProps) => props.bottom};
  right: ${(props: LabelProps) => props.right};
  position: ${(props: LabelProps) => props.position};
  float: ${(props: LabelProps) => props.float};
  vertical-align: ${(props: LabelProps) => props.verticalAlign};
  cursor: ${(props: WrapperProps) => props.cursor};

  @media (max-width: 768px) and (min-width: 320px) {
    display: ${(props: LabelProps) => props.hiddenOnResponsive && 'none'};
  }
`;
