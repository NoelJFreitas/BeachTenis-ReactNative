import React from 'react';
import {
  Box,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {$shadowProps} from '@theme';
import {Match} from '@domain';

interface NextMatchesItemProps extends TouchableOpacityBoxProps {
  match: Match;
}

export function GameListItem({match, ...touchableProps}: NextMatchesItemProps) {
  return (
    <TouchableOpacityBox
      activeOpacity={0.7}
      height={90}
      backgroundColor="grayWhite"
      borderRadius="r10"
      flexDirection="row"
      style={$shadowProps}
      {...touchableProps}>
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
            {match.name}
          </Text>
          <Text preset="paragraphCaption">{match.description}</Text>
        </Box>
        <Text preset="paragraphSmall" semibold>
          12:00 - {match.vacancies} Vagas
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
