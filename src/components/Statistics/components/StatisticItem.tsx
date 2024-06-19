import React from 'react';
import {Box, Icon, IconNames, Text} from '@components';

interface StatisticItemProps {
  icon: IconNames;
  title: string;
  value: number;
}

export function StatisticItem({icon, title, value}: StatisticItemProps) {
  return (
    <Box alignItems="center">
      <Icon name={icon} size={30} color="grayWhite" />
      <Text color="grayWhite" preset="paragraphSmall" marginVertical="s5">
        {title}
      </Text>
      <Text color="grayWhite" preset="headingMedium" bold>
        {value}
      </Text>
    </Box>
  );
}
