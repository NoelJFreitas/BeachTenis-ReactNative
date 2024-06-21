import {ThemeColors} from '@theme';
import {ButtonPresets} from '@components';

interface ButtonUI {
  container: ThemeColors;
  content: ThemeColors;
}

export const buttonPresets: Record<ButtonPresets, ButtonUI> = {
  default: {
    container: 'primary',
    content: 'background',
  },
  disable: {
    container: 'gray4',
    content: 'gray2',
  },
  cancel: {
    container: 'error',
    content: 'background',
  },
};
