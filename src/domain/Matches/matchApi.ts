import {api} from '@api';
import {MatchesApi} from './matchesType';

async function getMatches() {
  const response = await api.get<MatchesApi[]>('/matches');
  return response.data;
}

async function registerPlayerInTheMatch(matches_id: number, user_id: number) {
  await api.post('matches/signup', {
    matches_id,
    player: {
      user_id,
    },
  });
}

export const matchApi = {
  getMatches,
  registerPlayerInTheMatch,
};
