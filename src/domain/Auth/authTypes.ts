import {Player, PlayerApi} from '../Player/playerTypes';

export interface AuthCredentialsAPI {
  authToken: string;
  user: PlayerApi;
}

export interface AuthCredentials {
  token: string;
  user: Player;
}
export interface SignUpDataApi {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
