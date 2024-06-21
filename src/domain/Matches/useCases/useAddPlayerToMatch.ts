import {useState} from 'react';
import {matchesService} from '../matchesService';
import {useAuthCredentials} from '@services';
import {Alert} from 'react-native';

interface Options {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useAddPlayerToMatch({onSuccess, onError}: Options) {
  const {userId} = useAuthCredentials();
  const [isLoading, setIsLoading] = useState(false);

  async function registerPlayerInTheMatch(matchId: number) {
    try {
      setIsLoading(true);
      await matchesService.registerPlayerInTheMatch(matchId, userId!);
      onSuccess ? onSuccess() : undefined;
      Alert.alert('Sucesso!', 'Registrado com sucesso!');
    } catch (error) {
      Alert.alert('Desculpe', 'Ocorreu um erro ao se registrar na partida');
      onError ? onError() : undefined;
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    registerPlayerInTheMatch,
  };
}
