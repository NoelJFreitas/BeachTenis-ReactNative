import React from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  ViewStyle,
} from 'react-native';

import {ActivityIndicator, Box, Text} from '@components';

interface FlatListProps<ItemI> extends RNFlatListProps<ItemI> {
  isLoading?: boolean;
  loadingMessage?: string;
}

export function FlatList<ItemI>({
  isLoading,
  loadingMessage,
  ...flatListProps
}: FlatListProps<ItemI>) {
  if (isLoading !== undefined && isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text mb="s20">{loadingMessage}</Text>
        <ActivityIndicator />
      </Box>
    );
  }

  return (
    <RNFlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={$overflow}
      contentContainerStyle={$content}
      {...flatListProps}
    />
  );
}

const $overflow: ViewStyle = {
  overflow: 'visible',
};
const $content: ViewStyle = {
  gap: 12,
};
