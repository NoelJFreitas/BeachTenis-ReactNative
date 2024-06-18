import {Box, Button, Icon, Screen, Text} from '@components';

import {AuthScreenProps} from '@routes';
import React from 'react';
import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('screen').width;

export function SuccessScreen({navigation}: AuthScreenProps<'SuccessScreen'>) {
  function goBack() {
    navigation.goBack();
  }

  return (
    <Screen justifyContent="center">
      <Box justifyContent="center" alignItems="center" mb="s40">
        <Icon name="success" color="primary" size={WIDTH * 0.4} />
        <Text preset="paragraphLarge" bold mb="s20" mt="s20">
          Conta criada com sucesso!
        </Text>
        <Text textAlign="center">
          cadastro concluído, volte para a tela de login para acessar sua conta{' '}
        </Text>
      </Box>
      <Button title="Retornar" mt="s20" onPress={goBack} />
    </Screen>
  );
}
