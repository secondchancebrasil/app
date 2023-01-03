import {AppStackParams} from './appStackParams';
import {AuthStackParams} from './authStackParams';
import {ProfileFillingStackParams} from './profileFillingStackParams';
import {SignInStackParams} from './signUpStackParams';

export interface RootStackParamList
  extends AuthStackParams,
    SignInStackParams,
    AppStackParams,
    ProfileFillingStackParams {}
