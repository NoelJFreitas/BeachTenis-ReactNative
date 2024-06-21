import React from 'react';
import {
  ActivityIndicator,
  Box,
  BoxProps,
  ProfileAvatar,
  Text,
} from '@components';
import {useGetPlayerById} from '@domain';

interface UserDetailsProps extends BoxProps {
  playerId: number;
}

export function UserDetails({playerId, ...boxProps}: UserDetailsProps) {
  const {isLoading, player} = useGetPlayerById(playerId);
  return (
    <Box {...boxProps}>
      <Text bold mb="s10">
        Criado por:
      </Text>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <Box flexDirection="row" alignItems="center">
          <ProfileAvatar imageURL={player?.avatar} />
          <Text paddingLeft="s10">
            {player?.firstName} {player?.lastName}
          </Text>
        </Box>
      )}
    </Box>
  );
}
