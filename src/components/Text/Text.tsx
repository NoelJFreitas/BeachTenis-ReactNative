import {createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React from 'react';
import {TextStyle} from 'react-native';

const SRText = createText<Theme>();
export type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semibold?: boolean;
  black?: boolean;
  light?: boolean;
}

export function Text({
  children,
  style,
  bold,
  preset = 'paragraphMedium',
  semibold,
  light,
  black,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, semibold, black, light);

  return (
    <SRText
      color="backGroundContrast"
      style={[$fontSizes[preset], style, {fontFamily}]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  semibold?: boolean,
  black?: boolean,
  light?: boolean,
) {
  if (preset === 'headingLarge' || preset === 'headingMedium') {
    return $fontFamily.bold;
  }
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semibold:
      return $fontFamily.semibold;
    case black:
      return $fontFamily.black;
    case light:
      return $fontFamily.light;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'label'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 40},
  headingMedium: {fontSize: 20},

  paragraphLarge: {fontSize: 18},
  paragraphMedium: {fontSize: 16},
  paragraphSmall: {fontSize: 14},

  paragraphCaption: {fontSize: 12},
  paragraphCaptionSmall: {fontSize: 10},
  label: {fontSize: 13},
};

export const $fontFamily = {
  black: 'Raleway-Black',
  bold: 'Raleway-Bold',
  light: 'Raleway-Light',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
  semibold: 'Raleway-SemiBold',
};
