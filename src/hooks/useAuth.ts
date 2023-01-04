import React from 'react';

import {AuthContext} from '../contexts/auth';
import {AuthContextValues} from '../contexts/auth/types';

export const useAuth = (): AuthContextValues => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
