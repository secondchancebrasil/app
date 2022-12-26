import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 16px 26px;
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
  margin-bottom: 46px;
`;
export const SubTitleText = styled.Text`
  font-size: 18px;
  margin-top: 46px;
  color: #131313;
`;

export const WrapInput = styled.View`
  width: 100%;
  margin-bottom: 48px;
`;

export const WrapInputText = styled.View`
  position: relative;
  height: 60px;
  justify-items: center;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const InputPreFixText = styled.TextInput`
  height: 32px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #666666;
  font-size: 24px;
`;

export const CellphoneInput = styled.TextInput`
  flex: 1;
  height: 32px;
  margin-left: 26px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #666666;
  font-size: 24px;
`;

export const NameInputErrorText = styled.Text`
  position: absolute;
  bottom: 0;
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
