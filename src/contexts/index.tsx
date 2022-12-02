import React, {ReactNode, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './auth';

interface Props {
  children: ReactNode;
}

export const AppContext = ({children}: Props): ReactElement => (
  <AuthProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </AuthProvider>
);
