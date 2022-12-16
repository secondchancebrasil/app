import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 0 26px;
  /* TODO remove padding */
  padding-top: 64px;
  padding-bottom: 32px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

export const StepperWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 46px;
`;

export const TitleText = styled.Text`
  font-size: 36px;
  margin-bottom: 100px;
`;

export const WrapInput = styled.View`
  margin-bottom: 48px;
`;

export const EmailInput = styled.TextInput`
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #666666;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const EmailInputErrorText = styled.Text`
  margin-left: 6px;
  color: #fd3c5a;
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
