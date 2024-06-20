import {matchApi} from './matchApi';
import {matchesAdapter} from './matchesAdapter';
import {Match} from './matchesType';

async function getAllMatches(userId: number): Promise<Match[]> {
  const response = await matchApi.getMatches();
  return matchesAdapter.toAllMatches(response, userId);
}

async function getUserMatches(userId: number): Promise<Match[]> {
  const response = await matchApi.getMatches();
  return matchesAdapter.toUserMatches(response, userId);
}

export const matchesService = {
  getAllMatches,
  getUserMatches,
};
