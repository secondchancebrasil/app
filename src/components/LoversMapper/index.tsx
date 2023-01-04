import React from 'react';

import * as S from './styles';

export type ValueLoves = 0 | 20 | 40 | 60 | 80 | 100;

interface typeLovesData {
  affirmationLove: ValueLoves;
  giftLove: ValueLoves;
  timeLove: ValueLoves;
  gesturesLove: ValueLoves;
  touchLove: ValueLoves;
}

interface LoversMapperProps {
  typeLovesData: typeLovesData;
}

export const LoversMapper = ({
  typeLovesData: {affirmationLove, giftLove, timeLove, gesturesLove, touchLove},
}: LoversMapperProps) => {
  return (
    <S.Container>
      <S.Title size={16}>Afirmações</S.Title>
      <S.Bar>
        <S.BarColor size={affirmationLove} />
      </S.Bar>
      <S.Title size={16}>Presentes</S.Title>
      <S.Bar>
        <S.BarColor size={giftLove} />
      </S.Bar>
      <S.Title size={16}>Tempo</S.Title>
      <S.Bar>
        <S.BarColor size={timeLove} />
      </S.Bar>
      <S.Title size={16}>Gestos</S.Title>
      <S.Bar>
        <S.BarColor size={gesturesLove} />
      </S.Bar>
      <S.Title size={16}>Toques</S.Title>
      <S.Bar>
        <S.BarColor size={touchLove} />
      </S.Bar>
    </S.Container>
  );
};
