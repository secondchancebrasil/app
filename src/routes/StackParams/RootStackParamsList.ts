import {AuthStackParams} from './authStackParams';
import {SignInStackParams} from './signUpStackParams';

export interface RootStackParamList
  extends AuthStackParams,
    SignInStackParams {}
