import {Box, Icon, Text} from '@components';
import React from 'react';

interface BottomSheetHeaderProps {
  title?: string;
  onPressClose: () => void;
}

export function BottomSheetHeader({
  title,
  onPressClose,
}: BottomSheetHeaderProps) {
  return (
    <Box flexDirection="row" justifyContent="center" paddingBottom="s10">
      <Text preset="paragraphSmall" semibold>
        {title}
      </Text>
      <Box position="absolute" right={20}>
        <Icon name="close" color="primary" onPress={onPressClose} />
      </Box>
    </Box>
  );
}
