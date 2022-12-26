import React from 'react';
import {View} from 'react-native';

import {SafeArea} from '../../components/SafeAreaView';

import ModelTest from '../../assets/model-test/model.png';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container source={ModelTest}>
      <SafeArea backgroundColor="transparent">
        <S.Content>
          <S.ActionViewLeft onPress={() => console.log('Esquerda')}>
            <View style={{flex: 1}} />
          </S.ActionViewLeft>

          <S.ActionViewRight onPress={() => console.log('Direita')}>
            <View style={{flex: 1}} />
          </S.ActionViewRight>
        </S.Content>
      </SafeArea>
    </S.Container>
  );
};

export default Home;
