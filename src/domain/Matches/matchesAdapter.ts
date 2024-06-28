import {NewGameSchema} from '@screens';
import {Game, MatchesApi, NewMatch} from './matchesType';

function toAllMatches(data: MatchesApi[], userId: number): Game[] {
  const matches: Game[] = [];

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
      shortDescription: match.short_description,
      id: match.id,
      players: match.players.map(({user_id}) => user_id),
    });
  });

  return matches;
}

function toUserMatches(data: MatchesApi[], userId: number): Game[] {
  const matches: Game[] = [];
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
        shortDescription: match.short_description,
        players: match.players.map(({user_id}) => user_id),
      }),
    );

  return matches;
}

function toNewMatch(data: NewGameSchema, id: number): NewMatch {
  const match: NewMatch = {
    created_by: id,
    date: data.date,
    description: data.description,
    events_place: data.local,
    name: data.gameName,
    vacancies: data.vacancies,
    short_description: data.shortDescription,
  };

  return match;
}

export const matchesAdapter = {
  toAllMatches,
  toUserMatches,
  toNewMatch,
};
