import React from 'react';
import {Player} from '@domain';
import {Box, ProfileAvatar, Text} from '@components';

interface PlayerItemProps {
  player: Player;
}

export function PlayerItem({player}: PlayerItemProps) {
  return (
    <Box flexDirection="row" alignItems="center">
      <ProfileAvatar imageURL={player.avatar} />
      <Text paddingLeft="s10">
        {player.firstName} {player.lastName}
      </Text>
    </Box>
  );
}
