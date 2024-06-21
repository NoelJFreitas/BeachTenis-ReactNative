import React from 'react';
import {Image} from 'react-native';

const defaultAvatar = require('../../assets/img/defaultUser.png');

export interface ProfileAvatarProps {
  imageURL: string | undefined;
  /** @default 32 */
  size?: number;
  /** @default 14 */
  borderRadius?: number;
}
export function ProfileAvatar({
  imageURL,
  size = 32,
  borderRadius = 14,
}: ProfileAvatarProps) {
  return (
    <Image
      source={imageURL ? {uri: imageURL} : defaultAvatar}
      style={{width: size, height: size, borderRadius}}
      loadingIndicatorSource={defaultAvatar}
    />
  );
}
