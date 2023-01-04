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

export const TextInput = styled.TextInput`
  height: 216px;
  margin-top: 32px;
  border: 1px solid #000000;
  border-radius: 7px;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
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
