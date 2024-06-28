import {useEffect, useState} from 'react';
import {statisticsService} from '../statisticsServices';
import {useAuthCredentials} from '@services';
import {Statistics} from '../statisticsTypes';

export function useGetPlayerStatistics() {
  const userId = useAuthCredentials().userId!;
  const [isLoading, setIsLoading] = useState(false);
  const [playerStatistics, setPlayerStatistics] = useState<Statistics>({
    defeats: 0,
    draw: 0,
    match: 0,
    victories: 0,
    id: 0,
  });

  async function getPlayerStatistics() {
    try {
      setIsLoading(true);
      const response = await statisticsService.getStatistics(userId);
      setPlayerStatistics(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPlayerStatistics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    playerStatistics,
  };
}
