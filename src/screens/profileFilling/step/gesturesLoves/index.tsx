import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderArrowBack} from '../../../../components/HeaderArrowBack';

import {SafeArea} from '../../../../components/SafeAreaView';
import {Stepper} from '../../../../components/Stepper';
import {Text} from '../../../../components/Text';

import {useProfileFilling, ValueLoves} from '../..';
import {OPTIONS_CHECKBOX} from '../constants';

import * as S from './styles';

const GesturesLoves = () => {
  const {goBack, navigate} = useNavigation();
  const {
    totalStep,
    currentStep,
    updateProfileData,
    decrementStep,
    incrementStep,
    profileData,
  } = useProfileFilling();

  const [checked, setChecked] = useState(OPTIONS_CHECKBOX);

  const mathCheckedValue = useMemo(() => {
    const countValues = Object.values(checked).reduce(
      (a, item) => a + (item === true ? 20 : 0),
      0,
    );

    return countValues;
  }, [checked]);

  const handleSubmit = () => {
    updateProfileData({
      ...profileData,
      gesturesLove: mathCheckedValue as ValueLoves,
    });
    incrementStep();
    navigate('TouchLoves');
  };

  const previousStep = () => {
    decrementStep();
    goBack();
  };

  return (
    <SafeArea>
      <S.Container>
        <HeaderArrowBack actionBack={previousStep} />

        <S.StepperWrapper>
          <Stepper maxSteps={totalStep} stepper={currentStep} />
        </S.StepperWrapper>

        <S.ContentContainer>
          <View>
            <Text size={36}>Gestos</Text>
            <Text size={18}>Múltipla escolha</Text>

            <S.Checkbox
              checked={checked.option1}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option1: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Gosto quando meu par cozinha para mim
                </S.CheckboxText>
              )}
            </S.Checkbox>
            <S.Checkbox
              checked={checked.option2}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option2: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Gosto de ter alguém para me ajudar nas tarefas domésticas
                </S.CheckboxText>
              )}
            </S.Checkbox>
            <S.Checkbox
              checked={checked.option3}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option3: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Sempre que meu par precisa, estou disponível para ajudar
                </S.CheckboxText>
              )}
            </S.Checkbox>
            <S.Checkbox
              checked={checked.option4}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option4: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Faço tudo que está ao meu alcance para ver meu par feliz e
                  realizado
                </S.CheckboxText>
              )}
            </S.Checkbox>
            <S.Checkbox
              checked={checked.option5}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option5: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Gosto que meu par seja tão solícito quanto eu
                </S.CheckboxText>
              )}
            </S.Checkbox>
          </View>

          <S.ContinueButton onPress={handleSubmit}>
            <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
          </S.ContinueButton>
        </S.ContentContainer>
      </S.Container>
    </SafeArea>
  );
};

export default GesturesLoves;
