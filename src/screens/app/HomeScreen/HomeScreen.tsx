import {Ranking, Screen, Statistics, Text} from '@components';
import React from 'react';

export function HomeScreen() {
  return (
    <Screen>
      <Text textAlign="center" preset="paragraphLarge" bold mb="s20">
        Meus Dados
      </Text>
      <Statistics mb="s40" />
      <Text semibold mb="s15">
        Top 5 Jogadores
      </Text>
      <Ranking />
    </Screen>
  );
}
