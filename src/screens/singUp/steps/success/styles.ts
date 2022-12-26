import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingHorizontal: 32,
    alignItems: 'center',
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
}))`
  flex: 1;
`;

export const TitleView = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  text-align: left;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
`;

export const Image = styled.Image`
  margin-bottom: 64px;
`;

export const Paragraph = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.15px;
  margin-bottom: 32px;

  color: #131313;

  opacity: 0.66;
`;

interface ContinueButtonProps {
  disabled?: boolean;
}
export const ContinueButton = styled.TouchableOpacity<ContinueButtonProps>`
  background: ${({disabled}) => (disabled ? '#E0E0E0' : '#d92b7e')};
  height: 48px;
  width: 100%;
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
