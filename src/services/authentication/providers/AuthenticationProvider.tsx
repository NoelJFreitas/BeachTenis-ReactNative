import React, {createContext, useEffect, useState} from 'react';
import {AuthCredentialsService} from '../authenticationTypes';
import {AuthCredentials} from '@domain';
import {authCredentialsStorage} from '../authCredentialsStorage';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  credentials: null,
  isLoading: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
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
        setCredentials(ac);
      }
    } catch (error) {
      //TODO: handle error
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authCredentialsStorage.set(ac);
    setCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authCredentialsStorage.remove();
    setCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{
        credentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
