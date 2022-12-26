/* eslint-disable react/react-in-jsx-scope */
import {AxiosError} from 'axios';
import {createContext, useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../configs';
import {SessionsService, UsersServices} from '../../services';
import {destroyStorage, loadStorage, setStorage} from '../../utils/storage';
import {
  AuthContextValues,
  ErrorMessagesMap,
  AuthProps,
  User,
  UserCredentials,
} from './types';

export const AuthContext = createContext({} as AuthContextValues);

const USER_KEY = '@SECOND_CHANCE:user';
const TOKEN_KEY = '@SECOND_CHANCE:token';

export const AuthProvider = ({children}: AuthProps): JSX.Element => {
  const [loadedAuth, setLoadedAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const storagedUser = await loadStorage<User | null>({key: USER_KEY});
      const storagedToken = await loadStorage<string>({key: TOKEN_KEY});

      if (storagedToken && storagedUser) {
        api.defaults.headers.authorization = `Bearer ${storagedToken}`;

        const {data: updatedUser} = await UsersServices.show();

        setUser(updatedUser);
        setToken(storagedToken);
      }

      setLoadedAuth(true);
    })();
  }, []);

  const signIn = useCallback(async (credentials: UserCredentials) => {
    try {
      const {data} = await SessionsService.store(credentials);
      const {id: userData, token: userToken} = data;

      await setStorage({key: USER_KEY, value: userData});
      await setStorage({key: TOKEN_KEY, value: userToken});

      api.defaults.headers.authorization = `Bearer ${userToken}`;

      // TODO adjust types
      setUser(userData);
      setToken(userToken);
    } catch (error) {
      const {response} = error as AxiosError;

      if (!response) {
        return;
      }

      const errorMessagesMap: ErrorMessagesMap = {
        403: 'Email ou senha inválidos',
        default: 'Ops! Aconteceu um erro, tente novamente',
      };

      const errorMessage =
        errorMessagesMap[response.status] || errorMessagesMap.default;

      Alert.alert('Erro', errorMessage);

      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    destroyStorage({key: USER_KEY});
    destroyStorage({key: TOKEN_KEY});

    setUser(null);
    setToken(null);
  }, []);

  const updateUser = useCallback(async (userData: User) => {
    await setStorage({key: USER_KEY, value: userData});

    setUser(userData);
  }, []);

  const contextValues: AuthContextValues = {
    user,
    signIn,
    signOut,
    updateUser,
    loadedAuth,
    token,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
