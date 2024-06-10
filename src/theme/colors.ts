export const palette = {
  orangePrimary: '#DD6A4C',
  orangePrimaryLight: '#FCF4F3',

  redError: '#EA3838',
  redErrorLight: '#eb5e5e',

  grayBlack: '#000000',
  black60: 'rgba(0,0,0,0.6)',
  black40: 'rgba(0,0,0,0.4)',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',
};

export const colors = {
  ...palette,
  primary: palette.orangePrimary,
  primaryContrast: palette.grayWhite,

  background: palette.grayWhite,
  backGroundContrast: palette.grayBlack,

  error: palette.redError,
};
