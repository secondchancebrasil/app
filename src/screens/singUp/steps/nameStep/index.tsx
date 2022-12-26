import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import {useSignUp} from '../..';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';
import Stepper from '../../../../components/Stepper';

import * as S from './styles';
import {validationSchema} from './validations';
import {SafeArea} from '../../../../components/SafeAreaView';

interface FormValues {
  name: string;
}

interface NameStepProps {}

const NameStep: React.FC<NameStepProps> = ({}) => {
  const {
    currentStep,
    totalStep,
    incrementStep,
    decrementStep,
    userData,
    updateUserData,
  } = useSignUp();
  const {goBack, navigate} = useNavigation();

  const formikInitialValues = {
    name: userData.name,
  };

  const submit = ({name}: FormValues) => {
    console.log(name);
    updateUserData({...userData, name});
    incrementStep();
    navigate('BirthDateStep');
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

        <Formik<FormValues>
          initialValues={formikInitialValues}
          onSubmit={submit}
          validationSchema={validationSchema}>
          {({handleSubmit, errors, values, handleChange}) => (
            <S.ContentContainer>
              <View>
                <S.TitleText>Nome</S.TitleText>
                <S.SubTitleText>
                  O seu nome não será exibido na plataforma
                </S.SubTitleText>
                <S.WrapInput>
                  <S.NameInput
                    keyboardType="default"
                    placeholder="Digite seu nome completo"
                    value={values.name}
                    onChangeText={handleChange('name')}
                  />
                  {errors.name && (
                    <S.NameInputErrorText>* {errors.name}</S.NameInputErrorText>
                  )}
                </S.WrapInput>
              </View>

              <S.ContinueButton
                onPress={handleSubmit}
                disabled={!values.name || Object.keys(errors).length !== 0}>
                <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
              </S.ContinueButton>
            </S.ContentContainer>
          )}
        </Formik>
      </S.Container>
    </SafeArea>
  );
};

export default NameStep;
