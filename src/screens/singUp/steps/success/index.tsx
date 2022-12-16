import React from 'react';
import {Image, Text} from 'react-native';

import Welcome_image from '../../../../assets/welcome-image/welcome.png';

import * as S from './styles';

const Success: React.FC = () => {
  return (
    <S.Container>
      <Text> Bem-vindo</Text>
      <Image source={Welcome_image} />
      <Text>
        Parabéns por se cadastrar no Second Chance. Aqui acreditamos que o amor
        verdadeiro acontece offline e incentivamos o encontro presencial com as
        suas chances, oferecendo benefícios reais, sempre com segurança.
      </Text>
      <Text>
        Se você já estiver em um relacionamento também poderá usufruir do app e
        seus produtos. Mas antes de começar, temos um questionário bem rapidinho
        que vai aumentar muito as suas chances criando o seu gráfico de
        compatibilidade. Quer fazer isso agora?
      </Text>
    </S.Container>
  );
};

export default Success;
