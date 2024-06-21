import {useEffect, useState} from 'react';
import {matchesService} from '../matchesService';
import {useAuthCredentials} from '@services';
import {Game} from '../matchesType';

export function useGetAllMatches() {
  const {userId} = useAuthCredentials();
  const [isLoading, setIsLoading] = useState(true);
  const [allMatches, setAllMatches] = useState<Game[]>([]);

  async function getAllMatches() {
    try {
      const response = await matchesService.getAllMatches(userId!);
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
    getAllMatches,
  };
}
