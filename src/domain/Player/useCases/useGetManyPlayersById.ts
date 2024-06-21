import {useEffect, useState} from 'react';
import {Player} from '../playerTypes';
import {playerService} from '../playerService';

export function useGetManyPlayersById(id: number[]) {
  const [isLoading, setIsLoading] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

  async function getPlayerById() {
    try {
      setIsLoading(true);
      if (id.length === 0) {
        return;
      }
      const response = await playerService.getManyById(id);
      setPlayers(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPlayerById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    isLoading,
    players,
  };
}
