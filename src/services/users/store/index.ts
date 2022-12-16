import {AxiosResponse} from 'axios';

import {api} from '../../../configs';
import {DTO, Response} from './types';

export const store = async ({user}: DTO): Promise<AxiosResponse<Response>> => {
  const response = await api.post<Response>('/users', user);
  return response;
};
