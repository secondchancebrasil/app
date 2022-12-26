import {ReactNode} from 'react';

export interface User {
  id: any;
  token: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthContextValues {
  user: User | null;
  token: string | null;
  loadedAuth: boolean;
  signIn(credentials: UserCredentials): Promise<void>;
  signOut(): Promise<void>;
  updateUser(userData: User): Promise<void>;
}

export interface AuthProps {
  children: ReactNode;
}

export interface ErrorMessagesMap {
  [key: number]: string;
  [key: string]: string;
}
