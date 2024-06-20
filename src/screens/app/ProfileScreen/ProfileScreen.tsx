import React from 'react';
import {Box, Screen, Text} from '@components';
import {MenuItem} from './components/MenuItem';
import {Dimensions, Image, ImageStyle} from 'react-native';
import {useAuthCredentials} from '@services';

const WIDTH = Dimensions.get('screen').width;
const defaultAvatar = require('../../../assets/img/defaultUser.png');

export function ProfileScreen() {
  const {removeCredentials, credentials} = useAuthCredentials();
  const avatarUrl = credentials?.user.avatar;
  const user = credentials?.user;

  const avatar = avatarUrl ? {uri: avatarUrl} : defaultAvatar;

  function logout() {
    removeCredentials();
  }

  return (
    <Screen noPaddingBottom paddingTop="s25">
      <Box justifyContent="center" alignItems="center" mb="s30">
        <Image
          source={avatar}
          style={$image}
          resizeMode="center"
          onLoadEnd={() => console.log('finalizou')}
          loadingIndicatorSource={defaultAvatar}
        />
        <Text semibold mt="s15">
          {user?.firstName} {user?.lastName}
        </Text>
      </Box>
      <Box flex={7}>
        <MenuItem
          mb="s25"
          icon="userOutline"
          title="Conta"
          label="Minhas informações "
        />
        <MenuItem
          mb="s25"
          icon="heart"
          title="Favoritos"
          label="Campeonatos favoritos"
        />
        <MenuItem
          mb="s25"
          icon="settings"
          title="Configurações"
          label="Alterar configurações"
        />
      </Box>
      <Box flex={2} justifyContent="center">
        <MenuItem
          icon="logout"
          title="Sair"
          label="Sair da conta"
          onPress={logout}
        />
      </Box>
    </Screen>
  );
}

const $image: ImageStyle = {
  borderRadius: WIDTH * 0.5,
  height: WIDTH * 0.25,
  width: WIDTH * 0.25,
};
