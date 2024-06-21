import {Box, Button, PlayerList, Text} from '@components';
import {Game} from '@domain';
import React from 'react';
import {ScrollView, TextStyle} from 'react-native';
import {UserDetails} from './components/UserDetails';

interface GameDetails {
  game: Game;
}

export function GameDetails({game}: GameDetails) {
  return (
    <Box flex={1} backgroundColor="background" paddingHorizontal="s20">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text preset="headingMedium" style={$title} bold mb="s10">
          {game.name}
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          {game.shortDescription}
        </Text>

        <UserDetails playerId={game.createdBy} mb="s40" />

        <Text mb="s40" bold>
          Vagas restantes: <Text>{game.vacancies}</Text>
        </Text>

        <Text mb="s10" bold>
          Descrição
        </Text>
        <Text mb="s40">{game.description}</Text>

        <Text mb="s10" bold>
          Participantes
        </Text>
        <PlayerList playerIds={game.players} mb="s40" />
        <Button title="Inscrever-se" mb="s40" />
      </ScrollView>
    </Box>
  );
}

const $title: TextStyle = {
  fontSize: 23,
};
