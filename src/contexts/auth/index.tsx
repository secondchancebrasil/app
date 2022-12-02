/* eslint-disable react/react-in-jsx-scope */
import {createContext} from 'react';
import {AuthContextValues, Props} from './types';

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({children}: Props): JSX.Element => {
  const contextValues: AuthContextValues = {};

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
