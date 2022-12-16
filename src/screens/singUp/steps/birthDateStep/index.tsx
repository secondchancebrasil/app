import React from 'react';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Datepicker as DatePicker} from '@ui-kitten/components';
import {Formik} from 'formik';

import * as S from './styles';
import {validationSchema} from './validations';
import {useSignUp} from '../..';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';
import Stepper from '../../../../components/Stepper';

interface FormValues {
  birthDate: Date | null;
}

const BirthDateStep: React.FC = ({}) => {
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
    birthDate: userData.birthDate ? new Date(userData.birthDate) : null,
  };

  const submit = ({birthDate}: FormValues) => {
    if (birthDate) {
      updateUserData({...userData, birthDate: birthDate.toISOString()});
      incrementStep();
      return navigate('PasswordStep');
    }

    Alert.alert('Por favor, preencha o campo corretamente');
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

      <Formik<FormValues>
        initialValues={formikInitialValues}
        onSubmit={submit}
        validationSchema={validationSchema}>
        {({handleSubmit, errors, values, setFieldValue}) => (
          <S.ContentContainer>
            <View>
              <S.TitleText>Data de nascimento</S.TitleText>
              <S.SubTitleText>
                O Second Chance é uma plataforma para maiores de 30 anos
              </S.SubTitleText>

              <S.WrapInput>
                <DatePicker
                  size="large"
                  date={values.birthDate}
                  onSelect={value => setFieldValue('birthDate', value)}
                  placeholder="DD/MM/AAAA"
                  min={new Date('1930-01-01')}
                  max={new Date(`${new Date().getFullYear() - 29}-01-01`)}
                />

                {errors.birthDate && (
                  <S.InputErrorText>
                    * {String(errors.birthDate)}
                  </S.InputErrorText>
                )}
              </S.WrapInput>
            </View>

            <S.ContinueButton
              onPress={handleSubmit}
              disabled={!values.birthDate}>
              <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
            </S.ContinueButton>
          </S.ContentContainer>
        )}
      </Formik>
    </S.Container>
  );
};

export default BirthDateStep;
