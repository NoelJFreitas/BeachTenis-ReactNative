import React from 'react';
import {Separator, SeparatorProps} from '../Separator/Separator';
import {Box} from '@components';
import {SocialNetworkBox, SocialNetworkName} from './SocialNetworkBox';

interface SocialButtonsProps extends SeparatorProps {
  socialNetworkNames: SocialNetworkName[];
}

export function SocialButtons({
  centerLabel,
  socialNetworkNames,
  ...socialButtonsProps
}: SocialButtonsProps) {
  return (
    <Box {...socialButtonsProps}>
      <Separator centerLabel={centerLabel} />
      <Box
        flexDirection="row"
        justifyContent="space-around"
        mt="s30"
        paddingHorizontal="s20">
        {socialNetworkNames.map((name, i) => (
          <SocialNetworkBox key={String(i)} socialNetwork={name} />
        ))}
      </Box>
    </Box>
  );
}
