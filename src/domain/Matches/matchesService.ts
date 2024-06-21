import {matchApi} from './matchApi';
import {matchesAdapter} from './matchesAdapter';
import {Game} from './matchesType';

async function getAllMatches(userId: number): Promise<Game[]> {
  const response = await matchApi.getMatches();
  return matchesAdapter.toAllMatches(response, userId);
}

async function getUserMatches(userId: number): Promise<Game[]> {
  const response = await matchApi.getMatches();
  return matchesAdapter.toUserMatches(response, userId);
}

async function registerPlayerInTheMatch(matches_id: number, user_id: number) {
  await matchApi.registerPlayerInTheMatch(matches_id, user_id);
}

async function unsubscribePlayerTheMatch(matches_id: number, user_id: number) {
  await matchApi.unsubscribePlayerTheMatch(matches_id, user_id);
}

export const matchesService = {
  getAllMatches,
  getUserMatches,
  registerPlayerInTheMatch,
  unsubscribePlayerTheMatch,
};
