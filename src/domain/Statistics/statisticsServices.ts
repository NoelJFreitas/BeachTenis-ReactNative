import {statisticsAdapter} from './statisticsAdapter';
import {statisticsApi} from './statisticsApi';

async function getStatistics(userId: number) {
  const response = await statisticsApi.getStatistics(userId);
  return statisticsAdapter.toStatisticsApi(response);
}

export const statisticsService = {
  getStatistics,
};
