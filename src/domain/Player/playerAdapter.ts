import {Player, PlayerApi} from './playerTypes';

function toPlayer(data: PlayerApi): Player {
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    avatar: data.avatar?.url,
  };
}
function toManyPlayers(data: PlayerApi[]): Player[] {
  const players: Player[] = [];
  data.map(item => {
    players.push({
      id: item.id,
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      avatar: item.avatar?.url,
    });
  });

  return players;
}

export const playerAdapter = {
  toPlayer,
  toManyPlayers,
};
