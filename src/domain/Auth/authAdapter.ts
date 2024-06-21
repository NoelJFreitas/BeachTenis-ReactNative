import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(response: AuthCredentialsAPI): AuthCredentials {
  return {
    token: response.authToken,
    user: {
      id: response.user.id,
      avatar: response.user.avatar?.url,
      email: response.user.email,
      firstName: response.user.first_name,
      lastName: response.user.last_name,
    },
  };
}

export const authAdapter = {
  toAuthCredentials,
};
