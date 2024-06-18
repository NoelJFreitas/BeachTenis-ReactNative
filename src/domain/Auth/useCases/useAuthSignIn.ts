import {useState} from 'react';
import {authService} from '../authService';
import {Alert} from 'react-native';

interface Options {
  onSuccess?: () => void;
}

interface SignIn {
  email: string;
  password: string;
}

export function useAuthSignIn({onSuccess}: Options) {
  const [isLoading, setIsLoading] = useState(false);
  async function signIn({email, password}: SignIn) {
    try {
      setIsLoading(true);
      const response = await authService.signIn(email, password);
      console.log(response);
      onSuccess ? onSuccess() : undefined;
    } catch (error) {
      console.log(error);
      Alert.alert('Atenção', (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    signIn,
  };
}