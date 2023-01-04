import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {SafeArea} from '../../../../components/SafeAreaView';

import * as S from './styles';

const DescriptionProfile = () => {
  const [descriptionText, setDescriptionText] = useState('');
  const {navigate} = useNavigation();

  const handleSubmit = () => {
    console.log(descriptionText);
    navigate('AddPicture');
  };

  return (
    <SafeArea>
      <S.Container>
        <S.Content>
          <S.TextTitle size={36}>Descrição</S.TextTitle>
          <S.TextComponent>Escreva algo sobre você!</S.TextComponent>
          <S.TextComponent>
            Lembre-se que quanto mais as pessoas souberem, mais interessante
            você será para ela(e)s.
          </S.TextComponent>
          <S.TextComponent>
            São 240 caracteres para falar o que acha mais importante sobre você!
          </S.TextComponent>

          <S.TextInput
            value={descriptionText}
            onChangeText={setDescriptionText}
            placeholder="Toque para editar"
            maxLength={240}
            multiline
          />
        </S.Content>

        <S.ContinueButton onPress={handleSubmit}>
          <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
        </S.ContinueButton>
      </S.Container>
    </SafeArea>
  );
};

export default DescriptionProfile;
