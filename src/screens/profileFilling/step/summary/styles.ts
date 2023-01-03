import styled from 'styled-components/native';
import {Text} from '../../../../components/Text';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  padding: 16px 26px;
`;

export const StepperWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 46px;
`;

export const ContentContainer = styled.ScrollView`
  width: 100%;
`;
export const Subtitle = styled(Text)`
  margin-top: 16px;
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
