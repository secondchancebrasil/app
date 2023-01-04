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

const TouchLove = () => {
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
      touchLove: mathCheckedValue as ValueLoves,
    });
    incrementStep();
    navigate('Summary');
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
            <Text size={36}>Toques</Text>
            <Text size={18}>Múltipla escolha</Text>

            <S.Checkbox
              checked={checked.option1}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option1: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Um carinho sempre cai bem, independente do lugar
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
                  Sexo é uma das partes mais importantes do relacionamento
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
                  Quando estamos passeando faço questão de andar de mãos dadas
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
                  Sempre dou um jeito de encostar no meu par para demonstrar
                  carinho
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
                  Dar selinhos é uma forma de demonstrar carinho
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

export default TouchLove;
