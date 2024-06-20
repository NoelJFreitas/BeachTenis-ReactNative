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
import {HomeOutlineIcon} from '../../assets/icons/HomeOutlineIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {UserIcon} from '../../assets/icons/UserIcon';
import {UserOutlineIcon} from '../../assets/icons/UserOutlineIcon';
import {CalendarOutlineIcon} from '../../assets/icons/CalendarOutlineIcon';
import {CalendarIcon} from '../../assets/icons/CalendarIcon';
import {ClipboardIcon} from '../../assets/icons/ClipboardIcon';
import {ClipboardOutlineIcon} from '../../assets/icons/ClipboardOutlineIcon';
import {SettingsIcon} from '../../assets/icons/SettingsIcon';
import {HeartOutlineIcon} from '../../assets/icons/HeartOutlineIcon';
import {LogoutIcon} from '../../assets/icons/LogoutIcon';

const iconsRegistry = {
  return: ReturnIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  success: SuccessIcon,
  medal: MedalIcon,
  dislike: DislikeIcon,
  hands: HandsIcon,
  racket: RacketIcon,
  user: UserIcon,
  userOutline: UserOutlineIcon,
  calendar: CalendarIcon,
  calendarOutline: CalendarOutlineIcon,
  clipboard: ClipboardIcon,
  clipboardOutline: ClipboardOutlineIcon,
  home: HomeIcon,
  homeOutline: HomeOutlineIcon,
  settings: SettingsIcon,
  heart: HeartOutlineIcon,
  logout: LogoutIcon,
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
