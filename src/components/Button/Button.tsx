import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {buttonPresets} from './buttonPreset';

export type ButtonPresets = 'default' | 'disable';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  disabled,
  title,
  loading,
  ...buttonProps
}: ButtonProps) {
  const buttonPreset = disabled ? buttonPresets.disable : buttonPresets.default;
  return (
    <TouchableOpacityBox
      height={60}
      borderRadius="r15"
      justifyContent="center"
      alignItems="center"
      disabled={disabled || loading}
      backgroundColor={buttonPreset.container}
      {...buttonProps}>
      {loading ? (
        <ActivityIndicator color="grayWhite" />
      ) : (
        <Text preset="paragraphLarge" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
