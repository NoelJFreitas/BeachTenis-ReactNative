import {Box, Button, PlayerList, Text} from '@components';
import {Game, useAddPlayerToMatch, useUnsubscribePlayerToMatch} from '@domain';
import React from 'react';
import {ScrollView, TextStyle} from 'react-native';
import {UserDetails} from './components/UserDetails';
import {useTimestamp} from '@hooks';

interface GameDetails {
  game: Game;
  onPressSuccess?: () => void;
  pressFunction: 'unsubscribe' | 'register';
}

export function GameDetails({
  game,
  onPressSuccess,
  pressFunction,
}: GameDetails) {
  const {day, stringMonth, hour, minute} = useTimestamp(game.date);

  const register = useAddPlayerToMatch({
    onSuccess: onPressSuccess,
  });

  const unsubscribe = useUnsubscribePlayerToMatch({
    onSuccess: onPressSuccess,
  });

  function onSubmitRegisterMatch() {
    register.registerPlayerInTheMatch(game.id);
  }

  function onSubmitUnsubscribeMatch() {
    unsubscribe.unsubscribePlayerTheMatch(game.id);
  }

  return (
    <Box flex={1} backgroundColor="background" paddingHorizontal="s20">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text preset="headingLarge" style={$title} bold mb="s10">
          {game.name}
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          {game.shortDescription}
        </Text>

        <UserDetails playerId={game.createdBy} mb="s40" />

        <Text mb="s5" bold>
          Vagas restantes: <Text>{game.vacancies}</Text>
        </Text>
        <Text mb="s40" bold>
          Data:{' '}
          <Text>
            {day} {stringMonth} as {hour}: {minute}
          </Text>
        </Text>

        <Text mb="s10" bold>
          Descrição
        </Text>
        <Text mb="s40">{game.description}</Text>

        <Text mb="s10" bold>
          Participantes
        </Text>
        <PlayerList playerIds={game.players} mb="s40" />

        {pressFunction === 'register' && (
          <Button
            title="Inscrever-se"
            mb="s40"
            onPress={onSubmitRegisterMatch}
            loading={register.isLoading}
          />
        )}
        {pressFunction === 'unsubscribe' && (
          <Button
            title="Cancelar inscrição"
            mb="s40"
            onPress={onSubmitUnsubscribeMatch}
            loading={unsubscribe.isLoading}
            preset="cancel"
          />
        )}
      </ScrollView>
    </Box>
  );
}

const $title: TextStyle = {
  fontSize: 23,
};
