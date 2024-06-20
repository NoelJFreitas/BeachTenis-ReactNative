import React from 'react';
import {Svg, Path} from 'react-native-svg';

import {IconBase} from '@components';

export function HandsIcon({color = 'black', size = 20}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 24" fill="none">
      <Path
        d="M14.9628 5.11099C14.5293 5.32093 14.0996 5.61185 13.7011 6.01081C11.7036 8.00874 9.88781 9.82456 9.88781 9.82456L9.88857 9.82573C9.87773 9.83663 9.86683 9.84554 9.85593 9.85679C9.3389 10.3742 9.31839 11.1991 9.79587 11.7403C9.8148 11.7621 9.83501 11.7835 9.85593 11.804C10.3927 12.3415 11.2643 12.3428 11.8031 11.804L13.9006 9.70649C14.2625 9.83909 14.6183 9.91643 14.9596 9.95511C15.4247 10.0067 15.8615 9.98733 16.25 9.93255C17.197 9.79837 17.0978 9.83745 17.6471 9.65692C18.1951 9.47716 18.8109 9.10884 18.8109 9.10884L19.1836 9.4812C19.2247 9.5211 20.175 10.4729 20.6597 10.9569C20.7456 11.0431 20.8185 11.114 20.8673 11.1648C20.9233 11.2233 20.9858 11.2656 21.0244 11.322L23.4431 13.7407C24.1402 12.9584 24.9365 11.7935 24.8382 10.456L18.7947 4.41337C18.7947 4.41337 16.7028 4.2639 14.9628 5.11099Z"
        fill={color}
      />
      <Path
        d="M15.2997 19.9537C14.7645 19.4177 13.8957 19.4177 13.3602 19.9537L12.9621 20.3518C13.4964 19.8167 13.496 18.9499 12.9609 18.4143C12.4253 17.8796 11.5577 17.8796 11.0222 18.4147C11.5577 17.8796 11.5577 17.012 11.0222 16.476C10.487 15.94 9.61904 15.9409 9.08349 16.476C9.61904 15.9409 9.61904 15.0729 9.08349 14.5369C8.54829 14.0018 7.68034 14.0018 7.14474 14.5377L5.94591 15.7361C5.41036 16.2721 5.41036 17.1393 5.94591 17.6752C6.48105 18.2104 7.3487 18.2104 7.88419 17.6752C7.34865 18.2104 7.34865 19.0784 7.88419 19.6139C8.42015 20.1491 9.28775 20.1491 9.82329 19.6139C9.28775 20.1491 9.28775 21.0167 9.82329 21.5527C10.3588 22.0878 11.2264 22.0878 11.762 21.5527L12.1606 21.1537C11.6263 21.6897 11.6266 22.5564 12.1618 23.092C12.6973 23.6271 13.5649 23.6271 14.1005 23.092L15.2998 21.8927C15.8348 21.3564 15.8348 20.4888 15.2997 19.9537Z"
        fill={color}
      />
      <Path
        d="M29.7649 7.29262L22.7076 0.234536C22.3941 -0.0781787 21.8872 -0.0781787 21.5744 0.234536L19.3109 2.49801C18.9982 2.81073 18.9982 3.31768 19.3109 3.63081L26.369 10.6885C26.6813 11.002 27.1891 11.002 27.5014 10.6885L29.7649 8.42454C30.0784 8.1127 30.0784 7.60575 29.7649 7.29262ZM27.7532 8.85778C27.4163 9.19387 26.8715 9.19387 26.5358 8.85778C26.1998 8.52127 26.1998 7.97647 26.5358 7.64038C26.8715 7.30428 27.4163 7.30428 27.7532 7.64038C28.0893 7.97647 28.0889 8.52127 27.7532 8.85778Z"
        fill={color}
      />
      <Path
        d="M10.6885 2.69796L8.42536 0.434487C8.1127 0.121772 7.60534 0.121772 7.29262 0.434487L0.234536 7.49251C-0.0781787 7.80441 -0.0781787 8.31218 0.234536 8.62449L2.49807 10.8888C2.81038 11.2011 3.3185 11.2011 3.6304 10.8888L10.6885 3.8307C11.0016 3.51798 11.0016 3.01103 10.6885 2.69796ZM3.46393 9.05767C3.12784 9.39335 2.58268 9.39335 2.24653 9.05767C1.91049 8.72122 1.91049 8.17636 2.24653 7.84027C2.58262 7.50423 3.12784 7.50423 3.46393 7.84027C3.80002 8.17636 3.80002 8.72117 3.46393 9.05767Z"
        fill={color}
      />
      <Path
        d="M23.2926 15.1752L22.8551 14.7368L18.6065 10.4882L18.3204 10.6151L18.0089 10.7275L17.9864 10.7344C17.9315 10.7517 17.419 10.9085 16.4083 11.0515C15.874 11.1261 15.3445 11.1354 14.8319 11.0769C14.6293 11.0544 14.4278 11.0213 14.2287 10.9778L12.6023 12.6034C11.625 13.5807 10.0338 13.5807 9.05653 12.6034C9.02225 12.5688 8.98921 12.5337 8.95862 12.4991L8.94813 12.4874C8.3312 11.7878 8.17446 10.8303 8.46462 9.9994L9.08999 9.02622L9.08881 9.02505L12.9022 5.21212C13.0573 5.05737 13.2201 4.91311 13.3893 4.77688C12.201 4.54356 11.204 4.61247 11.204 4.61247L5.16169 10.6558C5.0803 11.7684 5.84436 12.9878 6.38794 13.6999C7.36598 12.7646 8.92147 12.7767 9.88253 13.7382C10.2404 14.0956 10.4657 14.5361 10.5607 14.9979C11.0233 15.0938 11.4634 15.3187 11.8212 15.6765C12.179 16.0347 12.4043 16.4752 12.4994 16.9374C12.9616 17.0325 13.4025 17.2573 13.76 17.6152C13.9989 17.8541 14.179 18.1298 14.3003 18.4248C14.9507 18.4167 15.6036 18.6601 16.0984 19.1546C17.074 20.1293 17.0736 21.717 16.0984 22.6915L15.6995 23.0912L15.8993 23.2911C16.4354 23.8271 17.3029 23.8271 17.8385 23.2911C18.374 22.7559 18.374 21.888 17.8385 21.3524L18.2374 21.7525C18.7734 22.2877 19.6406 22.2877 20.1761 21.7525C20.7116 21.2166 20.7121 20.349 20.1761 19.813C20.7121 20.349 21.5792 20.349 22.1148 19.813C22.65 19.2783 22.6512 18.4103 22.1148 17.8743C22.6512 18.4103 23.5183 18.4103 24.0535 17.8743C24.5895 17.3392 24.5895 16.4711 24.0535 15.936L23.2926 15.1752Z"
        fill={color}
      />
    </Svg>
  );
}