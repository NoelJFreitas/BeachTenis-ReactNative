import React from 'react';
import {Box, BoxProps, FlatList} from '@components';

import {ListRenderItemInfo, ViewStyle} from 'react-native';
import {Match, useGetUserMatches} from '@domain';
import {NextMatchesItem} from './components/NexMatchesItem';

interface NextMatchesProps extends BoxProps {}

export function NextMatches({...boxProps}: NextMatchesProps) {
  const {userMatches, isLoading} = useGetUserMatches();

  function renderItem({item}: ListRenderItemInfo<Match>) {
    return <NextMatchesItem match={item} />;
  }

  return (
    <Box {...boxProps}>
      <FlatList
        emptyMessage="Suas inscrições de jogos aparecerão aqui"
        data={userMatches}
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
