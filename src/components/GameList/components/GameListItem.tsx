import React from 'react';
import {
  Box,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {$shadowProps} from '@theme';
import {Match} from '@domain';
import {useTimestamp} from '@hooks';

interface NextMatchesItemProps extends TouchableOpacityBoxProps {
  match: Match;
}

export function GameListItem({match, ...touchableProps}: NextMatchesItemProps) {
  const {day, hour, minute, stringMonth} = useTimestamp(match.date);

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
          <Text color="grayWhite">{stringMonth}</Text>
          <Text bold preset="paragraphLarge" color="grayWhite">
            {day}
          </Text>
        </Box>
      </Box>
      <Box paddingVertical="s10" paddingLeft="s10">
        <Box flex={1}>
          <Text semibold preset="paragraphSmall" mb="s5">
            {match.name}
          </Text>
          <Text preset="paragraphCaption">{match.shortDescription}</Text>
        </Box>
        <Text preset="paragraphSmall" semibold>
          {hour}:{minute} - {match.vacancies} Vagas
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
