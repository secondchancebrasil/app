import {AxiosResponse} from 'axios';

import {api} from '../../../configs';
import {Session, SessionCredentials} from './types';

export const store = async (
  credentials: SessionCredentials,
): Promise<AxiosResponse<Session>> => {
  const response = await api.post<Session>('/auth/login', credentials);
  return response;
};
