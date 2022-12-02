import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useSignUp} from '../..';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';
import Stepper from '../../../../components/Stepper';

import * as S from './styles';

interface FirstStepProps {}

const FirstStep: React.FC<FirstStepProps> = ({}) => {
  const {currentStep, totalStep, incrementStep} = useSignUp();

  const {goBack, navigate} = useNavigation();

  const nextStep = () => {
    incrementStep();
    navigate('SecondStep');
  };

  const previousStep = () => {
    return goBack();
  };

  return (
    <S.Container>
      <HeaderArrowBack actionBack={previousStep} />

      <S.StepperWrapper>
        <Stepper maxSteps={totalStep} stepper={currentStep} />
      </S.StepperWrapper>

      <S.ContentContainer>
        <S.TitleText>Qual é o seu email?</S.TitleText>
        <S.EmailInput
          keyboardType="email-address"
          placeholder="Digite seu email"
        />

        <S.ContinueButton onPress={nextStep}>
          <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
        </S.ContinueButton>
      </S.ContentContainer>
    </S.Container>
  );
};

export default FirstStep;
