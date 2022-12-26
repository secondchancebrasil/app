import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 0 26px;
  /* TODO remove padding top */
  padding-top: 64px;
`;

export const ContentContainer = styled.View`
  width: 100%;
`;

export const StepperWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 46px;
`;

export const TitleText = styled.Text`
  font-size: 36px;
  margin-bottom: 56px;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: 22px;
`;

interface ButtonInputProps {
  selected: boolean | null;
}

export const ButtonInput = styled.TouchableOpacity<ButtonInputProps>`
  background: ${({selected = false}) => (selected ? '#d92b7e' : '#FFF')};
  height: 48px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px
    ${({selected = false}) =>
      selected ? 'rgba(217, 43, 126, 0.5)' : 'rgba(0, 0, 0, 0.3)'};
  border-radius: 63px;
  margin-bottom: 26px;
`;

interface SecondButtonInputProps {
  selected: boolean | null;
}

export const SecondButtonInput = styled.TouchableOpacity<SecondButtonInputProps>`
  background: ${({selected = false}) => (selected ? '#d92b7e' : '#FFF')};
  height: 48px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px
    ${({selected = false}) =>
      selected ? 'rgba(217, 43, 126, 0.5)' : 'rgba(0, 0, 0, 0.3)'};
  border-radius: 63px;
  margin-bottom: 26px;
`;

interface ButtonInputTextProps {
  selected: boolean | null;
}

export const ButtonInputText = styled.Text<ButtonInputTextProps>`
  color: ${({selected}) => (selected ? '#FFF' : 'rgba(217, 43, 126, 0.5)')};
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
