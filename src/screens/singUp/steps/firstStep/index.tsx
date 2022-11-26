import React from 'react';

import * as S from './styles';

interface FirstStepProps {
  nextStep(): void;
}

const FirstStep: React.FC<FirstStepProps> = ({nextStep}) => {
  return (
    <S.Container>
      <S.TitleText>Qual é o seu email?</S.TitleText>
      <S.EmailInput
        keyboardType="email-address"
        placeholder="Digite seu email"
      />

      <S.ContinueButton onPress={nextStep}>
        <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
      </S.ContinueButton>
    </S.Container>
  );
};

export default FirstStep;
