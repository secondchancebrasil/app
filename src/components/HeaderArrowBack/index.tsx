import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import arrowBack from '../../assets/arrow-back/arrow-back.png';

import * as S from './styles';

interface HeaderArrowBackProps {
  actionBack(): void;
}

const HeaderArrowBack: React.FC<HeaderArrowBackProps> = ({actionBack}) => {
  return (
    <S.Container>
      <TouchableOpacity onPress={actionBack}>
        <Image source={arrowBack} />
      </TouchableOpacity>
    </S.Container>
  );
};

export default HeaderArrowBack;
