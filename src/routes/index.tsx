import React from 'react';

import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';
import {useAuth} from '../hooks';

const Routes = (): JSX.Element => {
  const {token} = useAuth();

  return token ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
