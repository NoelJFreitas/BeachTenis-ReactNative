import {useState} from 'react';
import {authService} from '../authService';
import {SignUpDataApi} from '../authTypes';
import {isAxiosError} from 'axios';
import {Alert} from 'react-native';

interface Options {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useAuthSignUp({onError, onSuccess}: Options) {
  const [isLoading, setIsLoading] = useState(false);
  async function signUp(data: SignUpDataApi) {
    try {
      setIsLoading(true);
      await authService.signUp(data);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (isAxiosError(error)) {
        Alert.alert('Atenção', error.response?.data.message);
      } else {
        Alert.alert('Atenção', 'Ocorreu um erro no cadastro');
      }

      if (onError) {
        onError();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    signUp,
  };
}
