import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 0 26px;
  /* TODO remove padding top */
  padding-top: 64px;
`;

export const ContentContainer = styled.View``;

export const StepperWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 46px;
`;

export const TitleText = styled.Text`
  font-size: 36px;
  margin-bottom: 100px;
`;

export const EmailInput = styled.TextInput`
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #666666;
  font-size: 24px;
  margin-bottom: 48px;
`;

export const ContinueButton = styled.TouchableOpacity`
  background: #d92b7e;
  height: 48px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px rgba(217, 43, 126, 0.5);
  border-radius: 63px;
`;

export const ContinueButtonText = styled.Text`
  color: #fff;
`;
