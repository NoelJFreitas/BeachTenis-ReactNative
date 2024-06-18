import {api} from '@api';
import {AuthCredentialsAPI, SignUpDataApi} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signUp(data: SignUpDataApi) {
  const response = await api.post('auth/signup', data);
  return response;
}

export const authApi = {
  signIn,
  signUp,
};
