import {Box, BoxProps, Text} from '@components';
import {ThemeColors} from '@theme';
import React from 'react';

export interface SeparatorProps extends BoxProps {
  centerLabel?: string;
  lineHeight?: number;
  lineColor?: ThemeColors;
}

export function Separator({
  centerLabel,
  lineHeight = 1,
  lineColor = 'grayBlack',
  ...boxProps
}: SeparatorProps) {
  return (
    <Box flexDirection="row" {...boxProps} alignItems="center">
      <Box height={lineHeight} backgroundColor={lineColor} flex={1} />
      {centerLabel && (
        <Text marginHorizontal="s5" preset="paragraphSmall">
          {centerLabel}
        </Text>
      )}
      <Box height={lineHeight} backgroundColor={lineColor} flex={1} />
    </Box>
  );
}
