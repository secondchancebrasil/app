import styled from 'styled-components/native';
import {ValueLoves} from '.';
import {Text} from '../Text';

export const Container = styled.View`
  padding: 16px 0px;
  background: #fff;
`;

export const Title = styled(Text)`
  margin-top: 16px;
  margin-bottom: 6px;
`;

export const Bar = styled.View`
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
  border-radius: 5px;
`;

interface BarColorProps {
  size: ValueLoves;
}

export const BarColor = styled.View<BarColorProps>`
  width: ${({size}) => (size > 0 ? `${size}%` : '10px')};
  height: 10px;
  background-color: #d92b7e;
  border-radius: 5px;
`;
