import React from 'react';
import {Box, BoxProps} from '@components';
import {StatisticItem} from './components/StatisticItem';
import {$shadowProps} from '@theme';
import {useGetPlayerStatistics} from '@domain';

interface StatisticsProps extends BoxProps {}

export function Statistics({...boxProps}: StatisticsProps) {
  const {playerStatistics} = useGetPlayerStatistics();

  return (
    <Box
      height={120}
      width={'100%'}
      backgroundColor="primary"
      borderRadius="r15"
      justifyContent="space-between"
      paddingHorizontal="s20"
      alignItems="center"
      flexDirection="row"
      style={$shadowProps}
      {...boxProps}>
      <StatisticItem
        icon="medal"
        title="Vitórias"
        value={playerStatistics.victories}
      />
      <StatisticItem
        icon="dislike"
        title="Derrotas"
        value={playerStatistics.defeats}
      />
      <StatisticItem
        icon="hands"
        title="Empates"
        value={playerStatistics.draw}
      />
      <StatisticItem
        icon="racket"
        title="Tot. partidas"
        value={playerStatistics.match}
      />
    </Box>
  );
}
