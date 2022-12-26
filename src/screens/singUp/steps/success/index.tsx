import React from 'react';
import {View} from 'react-native';

import Welcome_image from '../../../../assets/welcome-image/welcome.png';
import {SafeArea} from '../../../../components/SafeAreaView';

import * as S from './styles';

const Success: React.FC = () => {
  return (
    <SafeArea>
      <S.Container>
        <View>
          <S.TitleView>
            <S.Title> Bem-vindo</S.Title>
          </S.TitleView>
          <S.Image source={Welcome_image} />
          <S.Paragraph>
            Parabéns por se cadastrar no Second Chance. Aqui acreditamos que o
            amor verdadeiro acontece offline e incentivamos o encontro
            presencial com as suas chances, oferecendo benefícios reais, sempre
            com segurança.
          </S.Paragraph>
          <S.Paragraph>
            Se você já estiver em um relacionamento também poderá usufruir do
            app e seus produtos. Mas antes de começar, temos um questionário bem
            rapidinho que vai aumentar muito as suas chances criando o seu
            gráfico de compatibilidade. Quer fazer isso agora?
          </S.Paragraph>
        </View>

        <S.ContinueButton>
          <S.ContinueButtonText>Continuar</S.ContinueButtonText>
        </S.ContinueButton>
      </S.Container>
    </SafeArea>
  );
};

export default Success;
