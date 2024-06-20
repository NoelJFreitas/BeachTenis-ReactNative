import {useEffect, useState} from 'react';
import {matchesService} from '../matchesService';
import {useAuthCredentials} from '@services';
import {Match} from '../matchesType';

export function useGetUserMatches() {
  const {userId} = useAuthCredentials();
  const [isLoading, setIsLoading] = useState(true);
  const [userMatches, setUserMatches] = useState<Match[]>();

  async function getUserMatches() {
    try {
      const response = await matchesService.getUserMatches(userId!);
      console.log(response);
      setUserMatches(response);
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
  };
}
