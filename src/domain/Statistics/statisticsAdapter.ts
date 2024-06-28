import {Statistics, StatisticsApi} from './statisticsTypes';

function toStatisticsApi(data: StatisticsApi): Statistics {
  return {
    id: data.id,
    defeats: data.defeats,
    draw: data.draw,
    match: data.match_played,
    victories: data.victories,
  };
}

export const statisticsAdapter = {
  toStatisticsApi,
};
