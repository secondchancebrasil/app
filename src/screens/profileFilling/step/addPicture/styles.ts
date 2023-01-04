import styled from 'styled-components/native';
import {Text} from '../../../../components/Text';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Content = styled.View``;

export const TextTitle = styled(Text)`
  margin-top: 36px;
  margin-bottom: 18px;
`;

export const TextComponent = styled(Text)``;

export const PhotoBackground = styled.TouchableOpacity`
  width: 100%;
  height: 316px;
  background-color: #c4c4c4;
  border-radius: 10px;
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 100%;
`;

interface ContinueButtonProps {
  disabled?: boolean;
}
export const ContinueButton = styled.TouchableOpacity<ContinueButtonProps>`
  margin-top: 64px;
  background: ${({disabled}) => (disabled ? '#E0E0E0' : '#d92b7e')};
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px
    ${({disabled}) =>
      disabled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(217, 43, 126, 0.5)'};
  border-radius: 63px;
`;

export const ContinueButtonText = styled.Text`
  color: #fff;
`;
