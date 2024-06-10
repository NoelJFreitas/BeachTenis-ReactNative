import {Pressable} from 'react-native';
import React from 'react';

import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';

import {ReturnIcon} from '../../assets/icons/ReturnIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';

const iconsRegistry = {
  return: ReturnIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

export type IconNames = keyof typeof iconsRegistry;

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  onPress?: () => void;
  size?: number;
  color?: ThemeColors;
  name: IconNames;
}

export function Icon({
  name,
  onPress,
  size = 25,
  color = 'grayBlack',
}: IconProps) {
  const {colors} = useAppTheme();

  const SVGIcon = iconsRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <SVGIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }
  return <SVGIcon size={size} color={colors[color]} />;
}
