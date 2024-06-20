import React from 'react';
import {GameList, Screen, Text} from '@components';
import {useGetAllMatches} from '@domain';

export function GameListScreen() {
  const matches = useGetAllMatches();
  return (
    <Screen>
      <Text textAlign="center" bold preset="paragraphLarge" mt="s10">
        Jogos disponíveis
      </Text>
      <GameList
        matches={matches.allMatches}
        isLoading={matches.isLoading}
        emptyMessage="Suas inscrições de jogos aparecerão aqui"
      />
    </Screen>
  );
}
