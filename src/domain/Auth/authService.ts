import {api} from '@api';
import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpDataApi} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('Usuário inválido');
  }
}

async function signUp(data: SignUpDataApi) {
  await authApi.signUp(data);
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const authService = {
  signIn,
  signUp,
  updateToken,
};
