import {useEffect, useState} from 'react';
import {Player} from '../playerTypes';
import {playerService} from '../playerService';

export function useGetPlayerById(id: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<Player>();

  async function getPlayerById() {
    try {
      setIsLoading(true);
      const response = await playerService.getById(id);
      setPlayer(response);
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
    player,
  };
}
