export interface StatisticsApi {
  id: number;
  victories: number;
  defeats: number;
  draw: number;
  match_played: number;
}

export interface Statistics {
  id: number;
  victories: number;
  defeats: number;
  draw: number;
  match: number;
}
