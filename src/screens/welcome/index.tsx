import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/white-logo/logo.png';

import * as S from './styles';

const Welcome: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <S.Container>
      <S.Image source={Logo} />
      <S.DescriptionText>
        Ao tocar em Criar conta ou Entrar, você concorda com os nossos Termos.
        Saiba como processamos os seus dados em nossa Política de Privacidade e
        Política de Cookies.
      </S.DescriptionText>

      <S.Button onPress={() => navigate('SignUp')}>
        <S.ButtonText>CRIAR CONTA</S.ButtonText>
      </S.Button>

      <S.Button onPress={() => navigate('SignIn')}>
        <S.ButtonText>ENTRAR</S.ButtonText>
      </S.Button>

      {/* <Text>Esqueci a senha</Text> */}
    </S.Container>
  );
};

export default Welcome;
