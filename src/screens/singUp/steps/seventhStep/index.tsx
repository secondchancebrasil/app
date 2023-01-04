import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useSignUp} from '../..';
import {HeaderArrowBack} from '../../../../components/HeaderArrowBack';
import {Stepper} from '../../../../components/Stepper';

import * as S from './styles';

interface SeventhStepProps {}

enum PREFER_GENRE {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
  ALL = 'ALL',
}

const SeventhStep: React.FC<SeventhStepProps> = ({}) => {
  const {currentStep, totalStep, incrementStep, decrementStep} = useSignUp();
  const {goBack, navigate} = useNavigation();
  const [value, setValue] = useState<PREFER_GENRE | null>(null);

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
        <S.TitleText>Me mostre</S.TitleText>

        <S.ButtonWrapper>
          <S.ButtonInput
            selected={value === PREFER_GENRE.MAN}
            onPress={() => setValue(PREFER_GENRE.MAN)}>
            <S.ButtonInputText selected={value === PREFER_GENRE.MAN}>
              HOMEM
            </S.ButtonInputText>
          </S.ButtonInput>

          <S.ButtonInput
            selected={value === PREFER_GENRE.WOMAN}
            onPress={() => setValue(PREFER_GENRE.WOMAN)}>
            <S.ButtonInputText selected={value === PREFER_GENRE.WOMAN}>
              MULHER
            </S.ButtonInputText>
          </S.ButtonInput>

          <S.SecondButtonInput
            selected={value === PREFER_GENRE.ALL}
            onPress={() => setValue(PREFER_GENRE.ALL)}>
            <S.ButtonInputText selected={value === PREFER_GENRE.ALL}>
              TODOS
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

export default SeventhStep;
