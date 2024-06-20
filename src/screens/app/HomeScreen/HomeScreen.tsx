import {GameList, Ranking, Screen, Statistics, Text} from '@components';
import {useGetUserMatches} from '@domain';
import React from 'react';

export function HomeScreen() {
  const matches = useGetUserMatches();
  return (
    <Screen scrollable>
      <Text textAlign="center" preset="paragraphLarge" bold mb="s20">
        Meus Dados
      </Text>
      <Statistics mb="s40" />
      <Text semibold mb="s15">
        Top 5 Jogadores
      </Text>
      <Ranking mb="s40" />
      <Text semibold mb="s15">
        Seus Jogos
      </Text>

      <GameList
        matches={matches.userMatches}
        isLoading={matches.isLoading}
        emptyMessage="Suas inscrições de jogos aparecerão aqui"
      />
    </Screen>
  );
}
