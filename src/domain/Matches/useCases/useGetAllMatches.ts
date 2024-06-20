import {useEffect, useState} from 'react';
import {matchesService} from '../matchesService';
import {useAuthCredentials} from '@services';
import {Match} from '../matchesType';

export function useGetAllMatches() {
  const {userId} = useAuthCredentials();
  const [isLoading, setIsLoading] = useState(false);
  const [allMatches, setAllMatches] = useState<Match[]>();

  async function getAllMatches() {
    try {
      const response = await matchesService.getAllMatches(userId!);
      console.log(userId);
      console.log(response);
      setAllMatches(response);
      setIsLoading(true);
    } catch (erro) {
      console.log(erro);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllMatches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    allMatches,
  };
}
