export interface Game {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  vacancies: number;
  date: number;
  eventPlace: string;
  createdBy: number;
  players: number[];
}

export interface MatchesApi {
  id: number;
  name: string;
  description: string;
  vacancies: number;
  date: number;
  events_place: string;
  short_description: string;
  created_by: number;
  players: {
    user_id: number;
  }[];
}

export interface NewMatch extends Omit<MatchesApi, 'id' | 'players'> {}
