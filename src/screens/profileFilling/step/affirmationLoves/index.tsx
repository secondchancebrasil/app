import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';

import {SafeArea} from '../../../../components/SafeAreaView';
import {Text} from '../../../../components/Text';

import * as S from './styles';
import Stepper from '../../../../components/Stepper';
import {useProfileFilling, ValueLoves} from '../..';
import {OPTIONS_CHECKBOX} from '../constants';

const AffirmationLoves = () => {
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
      affirmationLove: mathCheckedValue as ValueLoves,
    });
    incrementStep();
    navigate('GiftLoves');
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
            <Text size={36}>Afirmações</Text>
            <Text size={18}>Múltipla escolha</Text>

            <S.Checkbox
              checked={checked.option1}
              onChange={nextChecked =>
                setChecked(oldState => ({...oldState, option1: nextChecked}))
              }>
              {() => (
                <S.CheckboxText>
                  Eu me sinto melhor quando elogiam minha beleza
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
                  Eu me sinto melhor quando elogiam minha inteligência
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
                  Eu fico mais motivado quando ouço que fiz um bom trabalho
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
                  Eu me sinto melhor quando falam bem sobre meu senso de humor
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
                  Palavras de carinho me ajudam a melhorar quando não estou bem
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

export default AffirmationLoves;
