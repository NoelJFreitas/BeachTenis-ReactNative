import {AuthCredentials} from '@domain';

export interface AuthCredentialsService {
  credentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
