import {ImageProps} from 'react-native';
import {SocialNetworkName} from './SocialNetworkBox';

export const SocialNetworkImages: Record<
  SocialNetworkName,
  ImageProps['source']
> = {
  google: require('@assets/img/google.png'),
  facebook: require('@assets/img/facebook.png'),
  apple: require('@assets/img/apple.png'),
};
