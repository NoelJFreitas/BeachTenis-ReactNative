import React from 'react';
import {Box, Text} from '@components';
import {$shadowProps} from '@theme';

export function NextMatchesFake() {
  return (
    <Box
      height={90}
      backgroundColor="grayWhite"
      borderRadius="r10"
      flexDirection="row"
      style={$shadowProps}>
      <Box justifyContent="center" alignItems="center">
        <Box
          height={75}
          width={75}
          backgroundColor="primary"
          margin="s10"
          justifyContent="center"
          alignItems="center"
          borderRadius="r10">
          <Text color="grayWhite">Junho</Text>
          <Text bold preset="paragraphLarge" color="grayWhite">
            29
          </Text>
        </Box>
      </Box>
      <Box paddingVertical="s10" paddingLeft="s10">
        <Box flex={1}>
          <Text semibold preset="paragraphSmall" mb="s5">
            Jogo na Curva da Jurema
          </Text>
          <Text preset="paragraphCaption">Campeonato estadual</Text>
        </Box>
        <Text preset="paragraphSmall" semibold>
          12:00 - 10 Vagas
        </Text>
      </Box>
    </Box>
  );
}
