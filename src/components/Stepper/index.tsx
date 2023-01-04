import React from 'react';

import * as S from './styles';

interface StepperProps {
  maxSteps: number;
  stepper: number;
}

export const Stepper: React.FC<StepperProps> = ({maxSteps = 0, stepper}) => {
  const steps = Array(maxSteps).fill(0);

  return (
    <S.Container>
      {steps.map((_, index) => (
        <S.StepperView key={index} active={index <= stepper - 1} />
      ))}
    </S.Container>
  );
};
