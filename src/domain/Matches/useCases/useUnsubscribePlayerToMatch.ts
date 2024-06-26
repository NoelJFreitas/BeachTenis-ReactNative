import {useState} from 'react';
import {matchesService} from '../matchesService';
import {useAuthCredentials} from '@services';
import {Alert} from 'react-native';

interface Options {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useUnsubscribePlayerToMatch({onSuccess, onError}: Options) {
  const {userId} = useAuthCredentials();
  const [isLoading, setIsLoading] = useState(false);

  async function unsubscribePlayerTheMatch(matchId: number) {
    try {
      setIsLoading(true);
      await matchesService.unsubscribePlayerTheMatch(matchId, userId!);
      onSuccess ? onSuccess() : undefined;
      Alert.alert('Sucesso!', 'Inscrição cancelada com sucesso!');
    } catch (error) {
      Alert.alert('Desculpe', 'Ocorreu um erro ao cancelar a inscrição');
      onError ? onError() : undefined;
      console.log('unsubscribe match: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    unsubscribePlayerTheMatch,
  };
}
