import React from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {Ranking as RankingType} from '@domain';
import {Box, BoxProps} from '@components';

import {RankingItem} from './components/rankingItem';
import {RankingHeader} from './components/RankingHeader';

interface RankingProps extends BoxProps {
  // ranking: RankingType[];
}

const rank: RankingType[] = [
  {
    avatar: '',
    name: 'Jhon Doe',
    rank: 1,
    victories: 25,
  },
  {
    avatar: '',
    name: 'Jhon Doe',
    rank: 2,
    victories: 10,
  },
  {
    avatar: '',
    name: 'Jhon Doe',
    rank: 3,
    victories: 10,
  },
  {
    avatar: '',
    name: 'Jhon Doe',
    rank: 4,
    victories: 10,
  },
  {
    avatar: '',
    name: 'Jhon Doe',
    rank: 5,
    victories: 10,
  },
];

export function Ranking({...boxProps}: RankingProps) {
  function renderItem(card: ListRenderItemInfo<RankingType>) {
    return <RankingItem ranking={card.item} />;
  }

  return (
    <Box {...boxProps}>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={$flatList}
        ListHeaderComponent={RankingHeader}
        data={rank}
        renderItem={renderItem}
      />
    </Box>
  );
}

const $flatList: ViewStyle = {
  gap: 12,
};
