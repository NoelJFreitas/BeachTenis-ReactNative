export interface Match {
  id: number;
  name: string;
  description: string;
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
  created_by: number;
  players: {
    user_id: number;
  }[];
}