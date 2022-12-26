import React from 'react';

import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';

const Routes = (): JSX.Element => {
  const token = true;

  return token ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
