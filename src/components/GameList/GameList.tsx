import React from 'react';
import {Box, BoxProps, FlatList} from '@components';

import {ListRenderItemInfo, ViewStyle} from 'react-native';
import {GameListItem} from './components/GameListItem';
import {Game} from '@domain';

interface NextMatchesProps extends BoxProps {
  emptyMessage: string;
  onPress?: (match: Game) => void;
  matches: Game[];
  isLoading: boolean;
  scrollEnabled?: boolean;
}

export function GameList({
  emptyMessage,
  matches,
  isLoading,
  onPress,
  scrollEnabled = true,
  ...boxProps
}: NextMatchesProps) {
  function renderItem({item}: ListRenderItemInfo<Game>) {
    const onPressItem = onPress ? () => onPress(item) : undefined;
    return <GameListItem match={item} onPress={onPressItem} />;
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
