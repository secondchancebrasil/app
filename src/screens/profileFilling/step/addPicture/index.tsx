import React, {useState} from 'react';
import {ImageURISource} from 'react-native';

import {SafeArea} from '../../../../components/SafeAreaView';

import * as S from './styles';

const AddPicture = () => {
  const [imageUrl, setImageUrl] = useState<ImageURISource>({uri: undefined});

  const handleSubmit = () => {};

  const handleGetPhoto = () => {
    setImageUrl({
      uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1385481861i/7159203._SX540_.jpg',
    });
  };

  return (
    <SafeArea>
      <S.Container>
        <S.Content>
          <S.TextTitle size={36}>Foto</S.TextTitle>

          <S.PhotoBackground onPress={handleGetPhoto}>
            {imageUrl.uri ? (
              <S.ImageBackground source={imageUrl} resizeMode="cover" />
            ) : (
              <S.TextComponent size={46} color="#FFF">
                +
              </S.TextComponent>
            )}
          </S.PhotoBackground>

          <S.TextComponent>Adicione suas fotos!</S.TextComponent>

          <S.TextComponent>
            Pesquisas apontam que as fotografias mais interessantes são baseadas
            nessas sugestões. Mas você é livre para publicar apenas as que mais
            lhe agradem. É fundamental que você carregue ao menos uma foto para
            o seu perfil para que ele seja validado. Afinal, todos queremos
            chances reais por aqui, não é?
          </S.TextComponent>
        </S.Content>

        <S.ContinueButton onPress={handleSubmit}>
          <S.ContinueButtonText>CONTINUAR</S.ContinueButtonText>
        </S.ContinueButton>
      </S.Container>
    </SafeArea>
  );
};

export default AddPicture;
