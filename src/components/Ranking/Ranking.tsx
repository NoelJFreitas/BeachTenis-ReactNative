import {BoxProps, FlatList} from '@components';
import {Ranking as RankingType} from '@domain';
import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {RankingItem} from './components/rankingItem';
import {RankingHeader} from './components/RankingHeader';

interface RankingProps extends BoxProps {
  ranking: RankingType[];
}

const rank: RankingType[] = [
  {
    avatar: '',
    name: 'Noel',
    rank: 1,
    victories: 10,
  },
  {
    avatar: '',
    name: 'Pedro',
    rank: 2,
    victories: 10,
  },
  {
    avatar: '',
    name: 'Pedro',
    rank: 2,
    victories: 10,
  },
  {
    avatar: '',
    name: 'Pedro',
    rank: 2,
    victories: 10,
  },
  {
    avatar: '',
    name: 'Pedro',
    rank: 2,
    victories: 10,
  },
];

export function Ranking({...boxProps}: RankingProps) {
  function renderItem(card: ListRenderItemInfo<RankingType>) {
    return <RankingItem ranking={card.item} />;
  }

  return (
    <FlatList
      {...boxProps}
      scrollEnabled={false}
      ListHeaderComponent={RankingHeader}
      data={rank}
      renderItem={renderItem}
    />
  );
}
