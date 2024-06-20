import {Match, MatchesApi} from './matchesType';

function toAllMatches(data: MatchesApi[], userId: number): Match[] {
  const matches: Match[] = [];

  data.map(match => {
    const userInMatch = match.players.some(player => player.user_id === userId);
    if (userInMatch) {
      return;
    }

    matches.push({
      createdBy: match.created_by,
      date: match.date,
      name: match.name,
      description: match.description,
      eventPlace: match.events_place,
      vacancies: match.vacancies,
      id: match.id,
      players: match.players.map(({user_id}) => user_id),
    });
  });

  return matches;
}

function toUserMatches(data: MatchesApi[], userId: number): Match[] {
  const matches: Match[] = [];
  data
    .filter(match => {
      return match.players.some(player => player.user_id === userId);
    })
    .map(match =>
      matches.push({
        createdBy: match.created_by,
        date: match.date,
        name: match.name,
        description: match.description,
        eventPlace: match.events_place,
        vacancies: match.vacancies,
        id: match.id,
        players: match.players.map(({user_id}) => user_id),
      }),
    );

  return matches;
}

export const matchesAdapter = {
  toAllMatches,
  toUserMatches,
};