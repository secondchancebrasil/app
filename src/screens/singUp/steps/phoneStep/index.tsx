import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import {useSignUp} from '../..';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';
import Stepper from '../../../../components/Stepper';

import * as S from './styles';
import {validationSchema} from './validations';
import {phoneMask} from '../../../../utils/masks';
import {SafeArea} from '../../../../components/SafeAreaView';

interface FormValues {
  cellphone: string;
}

const PhoneStep: React.FC = () => {
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
    cellphone: userData.cellphone,
  };

  const submit = ({cellphone}: FormValues) => {
    updateUserData({...userData, cellphone: `+55 ${cellphone}`});
    incrementStep();
    navigate('EmailStep');
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
          {({handleSubmit, errors, values, setFieldValue}) => (
            <S.ContentContainer>
              <View>
                <S.TitleText>Meu número é</S.TitleText>

                <S.WrapInput>
                  <S.WrapInputText>
                    <S.InputPreFixText value={'BR +55'} editable={false} />
                    <S.CellphoneInput
                      keyboardType="default"
                      placeholder="(00) 00000-0000"
                      value={values.cellphone}
                      maxLength={15}
                      onChangeText={value =>
                        setFieldValue('cellphone', phoneMask(value))
                      }
                    />

                    {errors.cellphone && (
                      <S.NameInputErrorText>
                        * {errors.cellphone}
                      </S.NameInputErrorText>
                    )}
                  </S.WrapInputText>

                  <S.SubTitleText>
                    Este numero precisa ser cadastrado no Whats App.
                  </S.SubTitleText>
                </S.WrapInput>
              </View>

              <S.ContinueButton
                onPress={handleSubmit}
                disabled={
                  !values.cellphone || Object.keys(errors).length !== 0
                }>
                <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
              </S.ContinueButton>
            </S.ContentContainer>
          )}
        </Formik>
      </S.Container>
    </SafeArea>
  );
};

export default PhoneStep;
