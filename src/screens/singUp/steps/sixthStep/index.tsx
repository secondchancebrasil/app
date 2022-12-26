import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useSignUp} from '../..';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';
import Stepper from '../../../../components/Stepper';

import * as S from './styles';

enum GENRE {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
  NON_BINARY = 'NON-BINARY',
  NULL = 'NULL',
}

interface SixthStepProps {}

const SixthStep: React.FC<SixthStepProps> = ({}) => {
  const {currentStep, totalStep, incrementStep, decrementStep} = useSignUp();
  const {goBack, navigate} = useNavigation();
  const [value, setValue] = useState<GENRE | null>(null);

  const nextStep = () => {
    incrementStep();
    navigate('SeventhStep');
  };

  const previousStep = () => {
    decrementStep();
    goBack();
  };

  return (
    <S.Container>
      <HeaderArrowBack actionBack={previousStep} />

      <S.StepperWrapper>
        <Stepper maxSteps={totalStep} stepper={currentStep} />
      </S.StepperWrapper>

      <S.ContentContainer>
        <S.TitleText>Eu me identifico como?</S.TitleText>

        <S.ButtonWrapper>
          <S.ButtonInput
            selected={value === GENRE.MAN}
            onPress={() => setValue(GENRE.MAN)}>
            <S.ButtonInputText selected={value === GENRE.MAN}>
              HOMEM
            </S.ButtonInputText>
          </S.ButtonInput>

          <S.ButtonInput
            selected={value === GENRE.WOMAN}
            onPress={() => setValue(GENRE.WOMAN)}>
            <S.ButtonInputText selected={value === GENRE.WOMAN}>
              MULHER
            </S.ButtonInputText>
          </S.ButtonInput>

          <S.ButtonInput
            selected={value === GENRE.NON_BINARY}
            onPress={() => setValue(GENRE.NON_BINARY)}>
            <S.ButtonInputText selected={value === GENRE.NON_BINARY}>
              NÃO BINÁRIO
            </S.ButtonInputText>
          </S.ButtonInput>

          <S.SecondButtonInput
            selected={value === GENRE.NULL}
            onPress={() => setValue(GENRE.NULL)}>
            <S.ButtonInputText selected={value === GENRE.NULL}>
              PREFIRO NÃO DIZER
            </S.ButtonInputText>
          </S.SecondButtonInput>
        </S.ButtonWrapper>

        <S.ContinueButton onPress={nextStep} disabled={value === null}>
          <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
        </S.ContinueButton>
      </S.ContentContainer>
    </S.Container>
  );
};

export default SixthStep;
