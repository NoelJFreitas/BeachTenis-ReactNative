import React from 'react';
import {Box, Text} from '@components';
import {Ranking} from '@domain';
import {Image, ImageStyle} from 'react-native';

interface RankingProps {
  ranking: Ranking;
}
const img = require('../../../assets/img/profile.png');

export function RankingItem({ranking}: RankingProps) {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="s15">
      <Box width={'25%'}>
        <Text bold>{ranking.rank}</Text>
      </Box>
      <Box flex={1} flexDirection="row" alignItems="center">
        <Image source={img} style={$image} />
        <Text>{ranking.name}</Text>
      </Box>
      <Box>
        <Text semibold>{ranking.victories}</Text>
      </Box>
    </Box>
  );
}
const $image: ImageStyle = {
  height: 25,
  width: 25,
  borderRadius: 25,
  marginRight: 10,
};
