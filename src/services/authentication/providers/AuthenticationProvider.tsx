import React, {createContext, useEffect, useState} from 'react';
import {AuthCredentialsService} from '../authenticationTypes';
import {AuthCredentials, authService} from '@domain';
import {authCredentialsStorage} from '../authCredentialsStorage';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  credentials: null,
  isLoading: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  userId: null,
});

export function AuthenticationProvider({children}: React.PropsWithChildren) {
  const [credentials, setCredentials] = useState<AuthCredentials | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setCredentials(ac);
      }
    } catch (error) {
      //TODO: handle error
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authCredentialsStorage.remove();
    setCredentials(null);
  }
  const userId = credentials?.user.id || null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        userId,
        credentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
