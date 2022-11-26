import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: auto;
`;

interface StepperViewProps {
  active: boolean;
}

export const StepperView = styled.View<StepperViewProps>`
  width: 24px;
  height: 8px;
  border-radius: 12px;
  background-color: ${({active}) => (active ? '#D92B7E' : '#C4C4C4')};

  margin-right: 8px;
`;
