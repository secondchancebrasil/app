import React from 'react';
import {Text} from 'react-native';

import ModelTest from '../../assets/model-test/model.png';
import {SafeArea} from '../../components/SafeAreaView';

import * as S from './styles';

const InfoMatch = () => {
  return (
    <S.Container source={ModelTest}>
      <SafeArea backgroundColor="transparent">
        <S.Content>
          <Text>Fernanda</Text>
          <Text>30</Text>
          <Text>São Paulo</Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            laoreet eget tempor, vitae fusce faucibus semper convallis. Ac
            blandit proin eu in. Nibh aliquam, neque, viverra id lobortis
            pharetra. Non sodales risus ut eu quis adipiscing at. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Tristique laoreet eget
            tempor, vitae fusce faucibus semper convallis. Ac blandit proin eu
            in. Nibh aliquam, neque, viverra id lobortis pharetra. Non sodales
            risus ut eu quis adipiscing at.
          </Text>
        </S.Content>
      </SafeArea>
    </S.Container>
  );
};

export default InfoMatch;
