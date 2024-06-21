import {playerApi} from './payerApi';
import {playerAdapter} from './playerAdapter';

async function getById(user_id: number) {
  const response = await playerApi.getById(user_id);
  return playerAdapter.toPlayer(response);
}

async function getManyById(user_ids: number[]) {
  const response = await playerApi.getManyById(user_ids);
  return playerAdapter.toManyPlayers(response);
}

export const playerService = {
  getById,
  getManyById,
};
