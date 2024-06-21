import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {buttonPresets} from './buttonPreset';

export type ButtonPresets = 'default' | 'disable' | 'cancel';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  preset?: Exclude<ButtonPresets, 'disable'>;
}

export function Button({
  disabled,
  title,
  loading,
  preset = 'default',
  ...buttonProps
}: ButtonProps) {
  const buttonPreset = disabled
    ? buttonPresets.disable
    : preset === 'default'
    ? buttonPresets.default
    : buttonPresets.cancel;
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
