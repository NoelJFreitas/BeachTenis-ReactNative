import {api} from '@api';
import {MatchesApi, NewMatch} from './matchesType';

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

async function unsubscribePlayerTheMatch(matches_id: number, user_id: number) {
  await api.post('matches/unsubscribe', {
    matches_id,
    user_id,
  });
}

async function createNewMatch(newMatch: NewMatch) {
  await api.post<NewMatch>('/matches', newMatch);
}

export const matchApi = {
  getMatches,
  registerPlayerInTheMatch,
  unsubscribePlayerTheMatch,
  createNewMatch,
};
