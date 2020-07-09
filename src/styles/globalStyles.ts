import styled from 'styled-components';

type WrapperProps = {
  padding?: string;
  display?: string;
};

export const Wrapper = styled.div`
  padding: ${(props: WrapperProps) => props.padding};
  display: ${(props: WrapperProps) => props.display};
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

  @media (max-width: 768px) and (min-width: 320px) {
    display: ${(props: LabelProps) => props.hiddenOnResponsive && 'none'};
  }
`;
