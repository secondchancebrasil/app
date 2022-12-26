import styled from 'styled-components/native';

export const Container = styled.ImageBackground.attrs(() => ({
  imageStyle: {flex: 1},
}))`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ActionViewLeft = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const View = styled.View`
  flex: 1;
`;

export const ActionViewRight = styled.TouchableWithoutFeedback`
  flex: 1;
`;
