import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Radio, RadioGroup} from '@ui-kitten/components';

import {useProfileFilling} from '../..';
import {SafeArea} from '../../../../components/SafeAreaView';
import Stepper from '../../../../components/Stepper';

import * as S from './styles';

type CLASS_INDEX = 0 | 1 | 2 | 3 | 4 | 5;

const CLASS_VALUES = {
  0: {label: '', value: '+20'},
  1: {label: '', value: '10-20'},
  2: {label: '', value: '4-10'},
  3: {label: '', value: '2-4'},
  4: {label: '', value: '2'},
  5: {label: '', value: 'null'},
};

const SocialClass = () => {
  const {navigate} = useNavigation();
  const {
    totalStep,
    currentStep,
    updateProfileData,
    profileData,
    incrementStep,
  } = useProfileFilling();

  const [selectedIndex, setSelectedIndex] = useState<CLASS_INDEX | undefined>();

  const handleSubmit = () => {
    if (selectedIndex !== undefined) {
      updateProfileData({
        ...profileData,
        socialClass: CLASS_VALUES[selectedIndex].value,
      });
      incrementStep();
      navigate('AffirmationLoves');
    }
  };

  return (
    <SafeArea>
      <S.Container>
        <S.Content>
          <S.StepperWrapper>
            <Stepper maxSteps={totalStep} stepper={currentStep} />
          </S.StepperWrapper>

          <S.TittleText size={20}>
            Com qual classe social você mais se identifica? Nós não vamos
            mostrar isso para ninguém!
          </S.TittleText>

          <RadioGroup
            selectedIndex={selectedIndex}
            onChange={index => setSelectedIndex(index as CLASS_INDEX)}>
            <Radio>
              {() => (
                <S.RadioText>
                  Classe A (acima de 20 salários mínimos)
                </S.RadioText>
              )}
            </Radio>
            <Radio>
              {() => (
                <S.RadioText>
                  Classe B (de 10 a 20 salários mínimos)
                </S.RadioText>
              )}
            </Radio>
            <Radio>
              {() => (
                <S.RadioText>Classe C (de 4 a 10 salários mínimos)</S.RadioText>
              )}
            </Radio>
            <Radio>
              {() => (
                <S.RadioText>Classe D (de 2 a 4 salários mínimos)</S.RadioText>
              )}
            </Radio>
            <Radio>
              {() => (
                <S.RadioText>
                  Classe E (recebe até 2 salários mínimos)
                </S.RadioText>
              )}
            </Radio>
            <Radio>{() => <S.RadioText>Prefiro não dizer</S.RadioText>}</Radio>
          </RadioGroup>
        </S.Content>

        <S.ContinueButton
          onPress={handleSubmit}
          disabled={selectedIndex === undefined}>
          <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
        </S.ContinueButton>
      </S.Container>
    </SafeArea>
  );
};

export default SocialClass;
