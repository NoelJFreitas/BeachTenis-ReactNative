import React from 'react';
import {Svg, Path, Circle} from 'react-native-svg';

import {IconBase} from '@components';

export function UserOutlineIcon({color = 'black', size = 20}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="6" r="4" stroke={color} strokeWidth="1.5" />
      <Path
        d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </Svg>
  );
}
