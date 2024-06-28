import {useEffect, useState} from 'react';
import {matchesService} from '../matchesService';
import {useAuthCredentials} from '@services';
import {Game} from '../matchesType';

export function useGetUserMatches() {
  const {userId} = useAuthCredentials();
  const [isLoading, setIsLoading] = useState(true);
  const [userMatches, setUserMatches] = useState<Game[]>([]);

  async function getUserMatches() {
    try {
      setIsLoading(true);
      const response = await matchesService.getUserMatches(userId!);
      setUserMatches(response);
    } catch (erro) {
      console.log('get user matches:', erro);
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
