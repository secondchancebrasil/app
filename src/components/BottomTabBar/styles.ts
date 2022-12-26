import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  bottom: 24px;
  width: 100%;
  padding: 0 26px;
`;

export const NavigateOptionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  border-radius: 32px;
  padding: 2px;
`;

export const NavigateOption = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 10px;
  margin: 0 0px;
  border-radius: 20px;
`;

type IconImageProp = {
  isFocused: boolean;
};

export const IconImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))<IconImageProp>`
  width: ${({isFocused}) => (isFocused ? '84px' : '42px')};
`;
