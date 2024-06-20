import React from 'react';
import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function MedalIcon({color = 'black', size = 20}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 33" fill="none">
      <Path
        d="M2.81801 21.9834L0 29.9667L5.10738 28.2629L8.01229 32.7951L10.8655 24.7135L8.15505 22.3527L2.81801 21.9834Z"
        fill={color}
      />
      <Path
        d="M22.182 21.9834L16.846 22.3527L14.1345 24.7135L16.9867 32.7951L19.8916 28.2629L25 29.9667L22.182 21.9834Z"
        fill={color}
      />
      <Path
        d="M20.8858 20.2475L21.2168 15.4711L24.3607 11.8617L21.2168 8.25126L20.8858 3.47492L16.1115 3.14388L12.501 0L8.88956 3.14388L4.11425 3.47492L3.78321 8.2523L0.640364 11.8627L3.78321 15.4722L4.11425 20.2475L8.89059 20.5775L12.5021 23.7193L16.1125 20.5775L20.8858 20.2475ZM12.4379 18.4412C8.76955 18.4412 5.7943 15.467 5.7943 11.7996C5.7943 8.13229 8.76852 5.156 12.4379 5.156C16.1073 5.156 19.0816 8.13126 19.0816 11.7996C19.0816 15.468 16.1063 18.4412 12.4379 18.4412Z"
        fill={color}
      />
      <Path
        d="M10.2406 8.99095L10.5262 10.2975L11.9403 9.63235H11.9569V15.4784H13.6442V8.0661H12.201L10.2406 8.99095Z"
        fill={color}
      />
    </Svg>
  );
}