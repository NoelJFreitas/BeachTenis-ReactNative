import React from 'react';
import {Box, ProfileAvatar, Screen, Text} from '@components';
import {MenuItem} from './components/MenuItem';
import {useAuthCredentials} from '@services';

export function ProfileScreen() {
  const {removeCredentials, credentials} = useAuthCredentials();
  const avatarUrl = credentials?.user.avatar;
  const user = credentials?.user;

  function logout() {
    removeCredentials();
  }

  return (
    <Screen noPaddingBottom paddingTop="s25">
      <Box justifyContent="center" alignItems="center" mb="s30">
        <ProfileAvatar imageURL={avatarUrl} size={90} borderRadius={80} />
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
