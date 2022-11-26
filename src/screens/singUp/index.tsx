import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import FirstStep from './steps/firstStep';
import HeaderArrowBack from '../../components/HeaderArrowBack';
import Stepper from '../../components/Stepper';

import * as S from './styles';

const SignUp: React.FC = () => {
  const {goBack} = useNavigation();
  const [stepperCounter, setStepperCounter] = useState(1);

  const nextStep = () => {
    setStepperCounter(oldState => oldState + 1);
  };

  const previousStep = () => {
    if (stepperCounter === 1) {
      return goBack();
    }
    setStepperCounter(oldState => oldState - 1);
  };

  return (
    <S.Container>
      <HeaderArrowBack actionBack={previousStep} />

      <S.StepperWrapper>
        <Stepper maxSteps={8} stepper={stepperCounter} />
      </S.StepperWrapper>

      <FirstStep nextStep={nextStep} />
    </S.Container>
  );
};

export default SignUp;
