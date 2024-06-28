import {useState} from 'react';
import {matchesService} from '../matchesService';
import {NewGameSchema} from '@screens';
import {useAuthCredentials} from '@services';
import {Alert} from 'react-native';

interface Options {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useCreateNewMatch({onError, onSuccess}: Options) {
  const [isLoading, setIsLoading] = useState(false);
  const {userId} = useAuthCredentials();

  async function crateNewMatch(newMatch: NewGameSchema) {
    try {
      setIsLoading(true);
      matchesService.createNewMatch(newMatch, userId!);
      Alert.alert('Sucesso!', 'Partida cadastrada com sucesso!');
      onSuccess ? onSuccess() : undefined;
    } catch (error) {
      Alert.alert('Falha!', 'Não foi possível cadastrar a nova partida!');
      onError ? onError() : undefined;
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {isLoading, crateNewMatch};
}
