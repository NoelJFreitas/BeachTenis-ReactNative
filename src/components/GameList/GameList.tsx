import React from 'react';
import {Box, BoxProps, FlatList} from '@components';

import {ListRenderItemInfo, ViewStyle} from 'react-native';
import {GameListItem} from './components/GameListItem';
import {Match} from '@domain';

interface NextMatchesProps extends BoxProps {
  emptyMessage: string;
  onPress?: () => void;
  matches: Match[];
  isLoading: boolean;
}

export function GameList({
  emptyMessage,
  matches,
  isLoading,
  ...boxProps
}: NextMatchesProps) {
  function renderItem({item}: ListRenderItemInfo<Match>) {
    return <GameListItem match={item} />;
  }

  return (
    <Box {...boxProps}>
      <FlatList
        emptyMessage={emptyMessage}
        data={matches}
        renderItem={renderItem}
        style={$overflow}
        isLoading={isLoading}
        scrollEnabled={false}
      />
    </Box>
  );
}

const $overflow: ViewStyle = {
  overflow: 'visible',
};
