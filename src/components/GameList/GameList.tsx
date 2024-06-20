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
  scrollEnabled?: boolean;
}

export function GameList({
  emptyMessage,
  matches,
  isLoading,
  scrollEnabled = true,
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
        scrollEnabled={scrollEnabled}
      />
    </Box>
  );
}

const $overflow: ViewStyle = {
  overflow: 'visible',
};
