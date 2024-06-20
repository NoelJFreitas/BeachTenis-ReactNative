import React from 'react';
import {
  Box,
  Icon,
  IconNames,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

interface MenuItemProps extends TouchableOpacityBoxProps {
  icon: IconNames;
  title: string;
  label: string;
}

export function MenuItem({
  icon,
  label,
  title,
  ...touchableProps
}: MenuItemProps) {
  return (
    <TouchableOpacityBox activeOpacity={0.7} {...touchableProps}>
      <Box flexDirection="row" alignItems="center">
        <Icon name={icon} size={22} />
        <Box paddingLeft="s15">
          <Text semibold preset="paragraphSmall" mb="s5">
            {title}
          </Text>
          <Text preset="label" color="gray2">
            {label}
          </Text>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}
