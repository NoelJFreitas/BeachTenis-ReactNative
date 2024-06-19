import {Pressable} from 'react-native';
import React from 'react';

import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';

import {ReturnIcon} from '../../assets/icons/ReturnIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {SuccessIcon} from '../../assets/icons/SuccessIcon';
import {MedalIcon} from '../../assets/icons/MedalIcon';
import {DislikeIcon} from '../../assets/icons/DislikeIcon';
import {HandsIcon} from '../../assets/icons/HandsIcon';
import {RacketIcon} from '../../assets/icons/RacketIcon';

const iconsRegistry = {
  return: ReturnIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  success: SuccessIcon,
  medal: MedalIcon,
  dislike: DislikeIcon,
  hands: HandsIcon,
  racket: RacketIcon,
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
