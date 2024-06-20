import {createTheme} from '@shopify/restyle';
import {colors} from './colors';
import {ViewStyle} from 'react-native';

export const theme = createTheme({
  colors: colors,
  spacing: {
    s5: 5,
    s6: 6,
    s10: 10,
    s15: 15,
    s20: 20,
    s25: 25,
    s30: 30,
    s40: 40,
    s50: 50,
    s60: 60,
    s70: 70,
    s80: 80,
    s90: 90,
  },
  borderRadii: {
    r5: 5,
    r10: 10,
    r15: 15,
    r30: 30,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
