import React from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  ViewStyle,
} from 'react-native';

import {ActivityIndicator, Box, BoxProps, Text} from '@components';

interface FlatListProps<ItemI> extends RNFlatListProps<ItemI> {
  noPaddingHorizontal?: boolean;
  isLoading?: boolean;
  loadingMessage?: string;
  boxProps?: BoxProps;
}

export function FlatList<ItemI>({
  noPaddingHorizontal,
  isLoading,
  loadingMessage,
  contentContainerStyle,
  boxProps,

  ...flatListProps
}: FlatListProps<ItemI>) {
  const $contentStyle = noPaddingHorizontal ? $noPadding : $withPadding;

  if (isLoading !== undefined && isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text mb="s20">{loadingMessage}</Text>
        <ActivityIndicator />
      </Box>
    );
  }

  return (
    <Box {...boxProps} flex={1}>
      <RNFlatList
        contentContainerStyle={[$contentStyle, contentContainerStyle]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...flatListProps}
      />
    </Box>
  );
}

const $noPadding: ViewStyle = {
  paddingHorizontal: 25,
  paddingVertical: 15,
  rowGap: 12,
};

const $withPadding: ViewStyle = {
  rowGap: 12,
};
