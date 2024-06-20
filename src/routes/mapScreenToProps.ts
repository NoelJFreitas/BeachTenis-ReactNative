import {IconProps} from '@components';
import {AppTabBottomTabParamList} from './AppTab';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      fill: IconProps['name'];
      outline: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Home',
    icon: {
      fill: 'home',
      outline: 'homeOutline',
    },
  },
  GameListScreen: {
    label: 'Lista de Jogos',
    icon: {
      fill: 'clipboard',
      outline: 'clipboardOutline',
    },
  },
  NewGameScreen: {
    label: 'Novo Jogo',
    icon: {
      fill: 'calendar',
      outline: 'calendarOutline',
    },
  },
  ProfileScreen: {
    label: 'Perfil',
    icon: {
      fill: 'user',
      outline: 'userOutline',
    },
  },
};
