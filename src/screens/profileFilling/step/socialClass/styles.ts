import styled from 'styled-components/native';
import {Text} from '../../../../components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 16px 26px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const StepperWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 46px;
`;

export const TittleText = styled(Text)`
  margin-bottom: 16px;
`;

export const RadioText = styled(Text)`
  width: 100%;
  padding: 0 26px 0 12px;
  font-size: 18px;
`;

interface ContinueButtonProps {
  disabled: boolean;
}
export const ContinueButton = styled.TouchableOpacity<ContinueButtonProps>`
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
