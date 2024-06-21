import {useEffect, useState} from 'react';
import {matchesService} from '../matchesService';
import {useAuthCredentials} from '@services';
import {Game} from '../matchesType';

export function useGetUserMatches() {
  const {userId} = useAuthCredentials();
  const [isLoading, setIsLoading] = useState(false);
  const [userMatches, setUserMatches] = useState<Game[]>([]);

  async function getUserMatches() {
    try {
      const response = await matchesService.getUserMatches(userId!);
      setUserMatches(response);
      console.log('teste');
      setIsLoading(true);
    } catch (erro) {
      console.log(erro);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserMatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    userMatches,
    getUserMatches,
  };
}
