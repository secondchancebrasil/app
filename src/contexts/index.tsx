import React, {ReactNode, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './auth';
import {MatchProvider} from './match';

interface Props {
  children: ReactNode;
}

export const AppContext = ({children}: Props): ReactElement => (
  <AuthProvider>
    <MatchProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </MatchProvider>
  </AuthProvider>
);
