import React from 'react';
import {ListRenderItemInfo, ViewStyle} from 'react-native';
import {Box, BoxProps, FlatList} from '@components';
import {useGetManyPlayersById, Player} from '@domain';
import {PlayerItem} from './components/PlayerItem';

interface PlayerListProps extends BoxProps {
  playerIds: number[];
}

export function PlayerList({playerIds, ...boxProps}: PlayerListProps) {
  const {players} = useGetManyPlayersById(playerIds);

  function renderItem(card: ListRenderItemInfo<Player>) {
    return <PlayerItem player={card.item} />;
  }

  return (
    <Box {...boxProps}>
      <FlatList
        scrollEnabled={false}
        emptyMessage="sem inscrições ainda"
        data={players}
        contentContainerStyle={$gap}
        renderItem={renderItem}
      />
    </Box>
  );
}

const $gap: ViewStyle = {
  gap: 10,
};
