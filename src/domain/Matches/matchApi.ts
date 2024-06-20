import {api} from '@api';
import {MatchesApi} from './matchesType';

async function getMatches() {
  const response = await api.get<MatchesApi[]>('/matches');
  return response.data;
}

export const matchApi = {
  getMatches,
};
