import styled from 'styled-components/native';

import {HeaderArrowBack} from '../../components/HeaderArrowBack';
import {Text} from '../../components/Text';

export const Container = styled.View`
  flex: 1;
  padding: 16px 16px 0px;
`;

export const HeaderArrowBackComponent = styled(HeaderArrowBack)`
  margin-bottom: 32px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const TitleText = styled(Text)`
  margin-bottom: 32px;
`;

export const EmailTextInput = styled.TextInput`
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #666666;
  font-size: 24px;
  margin-bottom: 42px;
`;

export const PasswordTextInput = styled.TextInput`
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #666666;
  font-size: 24px;
  margin-bottom: 8px;
`;

interface ContinueButtonProps {
  disabled: boolean;
}
export const ContinueButton = styled.TouchableOpacity<ContinueButtonProps>`
  background: ${({disabled}) => (disabled ? '#E0E0E0' : '#d92b7e')};
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
