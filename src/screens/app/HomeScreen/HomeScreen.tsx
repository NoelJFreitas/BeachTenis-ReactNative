import {NextMatches, Ranking, Screen, Statistics, Text} from '@components';
import React from 'react';

export function HomeScreen() {
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
      <NextMatches />
    </Screen>
  );
}
