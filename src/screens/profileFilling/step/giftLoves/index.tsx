import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';

import {SafeArea} from '../../../../components/SafeAreaView';
import Stepper from '../../../../components/Stepper';
import {Text} from '../../../../components/Text';

import {useProfileFilling, ValueLoves} from '../..';
import {OPTIONS_CHECKBOX} from '../constants';

import * as S from './styles';

const GiftLoves = () => {
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
      giftLove: mathCheckedValue as ValueLoves,
    });
    incrementStep();
    navigate('TimeLoves');
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
            <Text size={36}>Presentes</Text>
            <Text size={18}>Múltipla escolha</Text>

            <S.Checkbox
              checked={checked.option1}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option1: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Eu me sinto incrível quando dou um presente caro
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
                  Eu adoro a sensação de ganhar um presente com significado
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
                  Eu me sinto incrível quando ganho um presente caro
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
                  Eu adoro a sensação de dar um presente com significado
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
                  Eu gosto muito mais de presentear do que ser presenteado
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

export default GiftLoves;
