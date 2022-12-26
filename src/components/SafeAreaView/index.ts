import styled from 'styled-components/native';

import {Platform, StatusBar} from 'react-native';

const android = Platform.OS === 'android';

interface SafeAreaViewProps {
  backgroundColor?: string;
}

export const SafeArea = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  margin-top: ${android ? `${StatusBar.currentHeight}px` : '0'};
  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : '#FFF'};
`;
