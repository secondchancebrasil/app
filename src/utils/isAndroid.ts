import {Platform} from 'react-native';

export const isAndroid = (): boolean => {
  return Platform.OS === 'android';
};
