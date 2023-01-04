import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import {useSignUp} from '../..';
import {HeaderArrowBack} from '../../../../components/HeaderArrowBack';
import {Stepper} from '../../../../components/Stepper';

import * as S from './styles';
import {validationSchema} from './validations';
import {View} from 'react-native';
import {SafeArea} from '../../../../components/SafeAreaView';

interface FormValues {
  email: string;
}

interface EmailStepProps {}

const EmailStep: React.FC<EmailStepProps> = ({}) => {
  const {currentStep, totalStep, incrementStep, updateUserData, userData} =
    useSignUp();
  const {goBack, navigate} = useNavigation();

  const formikInitialValues = {
    email: userData.email,
  };

  const submit = ({email}: FormValues) => {
    updateUserData({...userData, email});
    incrementStep();
    navigate('NameStep');
  };

  const previousStep = () => {
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
          {({handleSubmit, values, handleChange, errors}) => (
            <S.ContentContainer>
              <View>
                <S.TitleText>Qual é o seu email?</S.TitleText>
                <S.WrapInput>
                  <S.EmailInput
                    keyboardType="email-address"
                    placeholder="Digite seu email"
                    value={values.email}
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && (
                    <S.EmailInputErrorText>
                      * {errors.email}
                    </S.EmailInputErrorText>
                  )}
                </S.WrapInput>
              </View>

              <S.ContinueButton
                onPress={handleSubmit}
                disabled={!values.email || Object.keys(errors).length !== 0}>
                <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
              </S.ContinueButton>
            </S.ContentContainer>
          )}
        </Formik>
      </S.Container>
    </SafeArea>
  );
};

export default EmailStep;
