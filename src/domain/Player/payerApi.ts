import {api} from '@api';
import {PlayerApi} from './playerTypes';

async function getById(user_id: number) {
  const response = await api.get<PlayerApi>('user/id', {params: {user_id}});
  return response.data;
}

async function getManyById(id_list: number[]) {
  const response = await api.get<PlayerApi[]>('user/all', {params: {id_list}});
  return response.data;
}

export const playerApi = {
  getById,
  getManyById,
};
