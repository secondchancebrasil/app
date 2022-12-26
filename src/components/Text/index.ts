import styled from 'styled-components/native';

interface TextProps {
  weight?: '400';
  color?: '#E0E0E0' | string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  /* font-family: ${({weight}) =>
    weight ? `Roboto-${weight}` : 'Roboto-400'}; */
  color: ${({color}) => color || '#131313'};
  font-size: ${({size}) => (size ? `${size}px` : '16px')};
  opacity: ${({opacity}) => opacity || 1};
`;
