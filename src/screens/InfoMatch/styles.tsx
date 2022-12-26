import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs(() => ({
  imageStyle: {flex: 1},
}))`
  flex: 1;
`;

export const Content = styled.View`
  padding: 0 16px;
`;
