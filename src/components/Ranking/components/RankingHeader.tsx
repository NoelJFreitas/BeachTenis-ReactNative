import {Box, Text} from '@components';
import React from 'react';

export function RankingHeader() {
  return (
    <Box
      flexDirection="row"
      backgroundColor="gray5"
      paddingVertical="s5"
      paddingHorizontal="s10"
      borderRadius="r5">
      <Box width={'25%'}>
        <Text color="gray1" semibold>
          Rank
        </Text>
      </Box>
      <Box flex={1}>
        <Text color="gray1" semibold>
          Jogador
        </Text>
      </Box>
      <Box>
        <Text color="gray1" semibold>
          Vitórias
        </Text>
      </Box>
    </Box>
  );
}
