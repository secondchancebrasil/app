import {AxiosResponse} from 'axios';

import {api} from '../../../configs';
import {Response} from './types';

export const show = async (): Promise<AxiosResponse<Response>> => {
  const response = await api.get<Response>('/user');
  return response;
};
