import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderArrowBack from '../../../../components/HeaderArrowBack';

import {SafeArea} from '../../../../components/SafeAreaView';
import {Text} from '../../../../components/Text';

import {useProfileFilling} from '../..';

import * as S from './styles';

const Summary = () => {
  const {goBack, navigate} = useNavigation();
  const {profileData} = useProfileFilling();

  const handleSubmit = () => {
    console.log('enviado', profileData);
    navigate('TabNavigator');
  };

  const previousStep = () => {
    goBack();
  };

  return (
    <SafeArea>
      <S.Container>
        <HeaderArrowBack actionBack={previousStep} />

        <S.ContentContainer>
          <View>
            <S.Subtitle size={36}>Pronto!</S.Subtitle>
            <S.Subtitle size={18}>
              Este aqui é o seu gráfico de compatibilidade. Ele vai aparecer
              sempre que você tiver uma chance com alguém!
            </S.Subtitle>

            <S.Subtitle size={18}>
              Lembre-se: você pode alterá-lo sempre que quiser, basta refazer o
              questionário!
            </S.Subtitle>
            <S.Subtitle size={18}>Boas chances!</S.Subtitle>
          </View>

          <S.ContinueButton onPress={handleSubmit}>
            <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
          </S.ContinueButton>
        </S.ContentContainer>
      </S.Container>
    </SafeArea>
  );
};

export default Summary;
