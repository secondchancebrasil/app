import React, {useCallback, useState} from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import {useSignUp} from '../..';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';
import Stepper from '../../../../components/Stepper';
// import {UsersServices} from '../../../../services';

import * as S from './styles';
import {validationSchema} from './validations';
import {AxiosError} from 'axios';
import {SafeArea} from '../../../../components/SafeAreaView';

interface FormValues {
  password: string;
  passwordConfirmation: string;
}

interface PasswordStepProps {}

const PasswordStep: React.FC<PasswordStepProps> = ({}) => {
  const {currentStep, totalStep, decrementStep, userData, updateUserData} =
    useSignUp();
  const {goBack, navigate} = useNavigation();

  const [loading, setLoading] = useState(false);

  const formikInitialValues = {
    password: userData.password,
    passwordConfirmation: userData.password,
  };

  const submit = useCallback(
    async ({password, passwordConfirmation}: FormValues) => {
      setLoading(true);

      try {
        const user = {...userData, password, passwordConfirmation};
        updateUserData(user);
        // TODO
        // await UsersServices.store({user: userData});

        return navigate('Success');
      } catch (error) {
        const {response} = error as AxiosError;

        // TODO check
        Alert.alert('Algo deu errado', String(response));
      }
      return setLoading(false);
    },
    [navigate, updateUserData, userData],
  );

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
                <S.TitleText>Senha</S.TitleText>
                <S.SubTitleText>Cadastre sua senha</S.SubTitleText>
                <S.WrapInput>
                  <S.PasswordInput
                    keyboardType="default"
                    placeholder="Digite uma senha"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    maxLength={8}
                    secureTextEntry
                  />
                  {errors.password && (
                    <S.PasswordInputErrorText>
                      * {errors.password}
                    </S.PasswordInputErrorText>
                  )}
                </S.WrapInput>

                <S.WrapInput>
                  <S.PasswordInput
                    keyboardType="default"
                    placeholder="Confirme sua senha"
                    value={values.passwordConfirmation}
                    maxLength={8}
                    onChangeText={handleChange('passwordConfirmation')}
                    secureTextEntry
                  />
                  {errors.passwordConfirmation && (
                    <S.PasswordInputErrorText>
                      * {errors.passwordConfirmation}
                    </S.PasswordInputErrorText>
                  )}
                </S.WrapInput>
              </View>

              <S.ContinueButton
                onPress={handleSubmit}
                disabled={
                  !values.password ||
                  !values.passwordConfirmation ||
                  Object.keys(errors).length !== 0 ||
                  loading
                }>
                <S.ContinueButtonText>
                  {loading ? <ActivityIndicator /> : 'CONTINUAR'}
                </S.ContinueButtonText>
              </S.ContinueButton>
            </S.ContentContainer>
          )}
        </Formik>
      </S.Container>
    </SafeArea>
  );
};

export default PasswordStep;
