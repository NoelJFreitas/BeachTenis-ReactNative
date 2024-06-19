import React from 'react';
import {Box, BoxProps} from '@components';
import {StatisticItem} from './components/StatisticItem';

interface StatisticsProps extends BoxProps {}

export function Statistics({...boxProps}: StatisticsProps) {
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
      {...boxProps}>
      <StatisticItem icon="medal" title="Vitórias" value={0} />
      <StatisticItem icon="dislike" title="Derrotas" value={0} />
      <StatisticItem icon="hands" title="Empates" value={0} />
      <StatisticItem icon="racket" title="Tot. partidas" value={0} />
    </Box>
  );
}
