import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {SafeArea} from '../../components/SafeAreaView';
import {useAuth} from '../../hooks';

import * as S from './styles';
import {validationSchema} from './validations';

const formikInitialValues = {
  email: '',
  password: '',
};

interface FormValues {
  email: string;

  password: string;
}

const SignIn = () => {
  const {signIn} = useAuth();

  const [loading, setLoading] = useState(false);
  const {goBack} = useNavigation();

  const submit = async ({email, password}: FormValues) => {
    setLoading(true);

    try {
      // TODO await
      await signIn({email, password});
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeArea>
      <S.Container>
        <S.HeaderArrowBackComponent actionBack={goBack} />
        <Formik<FormValues>
          onSubmit={submit}
          initialValues={formikInitialValues}
          validationSchema={validationSchema}>
          {({handleSubmit, values, handleChange, errors}) => (
            <S.Content>
              <View>
                <S.TitleText size={36}> Faça o seu login </S.TitleText>
                <S.EmailTextInput
                  keyboardType="email-address"
                  placeholder="Digite seu email"
                  value={values.email}
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                />

                <S.PasswordTextInput
                  keyboardType="default"
                  placeholder="Digite sua senha"
                  value={values.password}
                  maxLength={8}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
              </View>

              <S.ContinueButton
                onPress={handleSubmit}
                disabled={
                  !values.email ||
                  !values.password ||
                  Object.keys(errors).length !== 0 ||
                  loading
                }>
                <S.ContinueButtonText>
                  {loading ? <ActivityIndicator /> : 'CONTINUAR'}
                </S.ContinueButtonText>
              </S.ContinueButton>
            </S.Content>
          )}
        </Formik>
      </S.Container>
    </SafeArea>
  );
};

export default SignIn;
