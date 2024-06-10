import React from 'react';

import {Box, BoxProps} from '@components';
import {Image, ImageStyle} from 'react-native';
import {SocialNetworkImages} from './socialImages';

export type SocialNetworkName = 'google' | 'facebook' | 'apple';

interface SocialBoxProps extends BoxProps {
  socialNetwork: SocialNetworkName;
}

export function SocialNetworkBox({socialNetwork}: SocialBoxProps) {
  return (
    <Box
      height={60}
      width={60}
      backgroundColor="orangePrimaryLight"
      borderRadius="r15"
      justifyContent="center"
      alignItems="center">
      <Image
        source={SocialNetworkImages[socialNetwork]}
        resizeMode="contain"
        style={$Image}
      />
    </Box>
  );
}
const $Image: ImageStyle = {height: '50%'};
