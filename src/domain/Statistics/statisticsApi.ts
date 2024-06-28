import {api} from '@api';
import {StatisticsApi} from './statisticsTypes';

async function getStatistics(user_id: number) {
  const response = await api.get<StatisticsApi>('statistics', {
    params: {user_id},
  });
  return response.data;
}

export const statisticsApi = {
  getStatistics,
};
