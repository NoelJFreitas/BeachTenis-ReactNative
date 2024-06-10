import React from 'react';
import {
  Box,
  BoxProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

interface SwitchProps extends TouchableOpacityBoxProps {
  activeState: boolean;
}

export function Switch({
  activeState,
  ...touchableOpacityBoxProps
}: SwitchProps) {
  const $activityStyle: BoxProps = {
    backgroundColor: activeState ? 'primary' : 'gray2',
    alignItems: activeState ? 'flex-end' : 'flex-start',
  };

  return (
    <TouchableOpacityBox
      borderRadius="r5"
      height={20}
      width={40}
      paddingHorizontal="s5"
      justifyContent="center"
      {...$activityStyle}
      {...touchableOpacityBoxProps}>
      <Box height={15} width={17} backgroundColor="gray5" borderRadius="r5" />
    </TouchableOpacityBox>
  );
}
