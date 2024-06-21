import {
  BottomSheet,
  Box,
  GameDetails,
  GameList,
  Ranking,
  Screen,
  Statistics,
  Text,
} from '@components';
import {Game, useGetUserMatches} from '@domain';
import React, {useRef, useState} from 'react';

export function HomeScreen() {
  const [selectedGame, setSelectedGame] = useState<Game | undefined>();
  const matches = useGetUserMatches();
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOnPressItem(game: Game) {
    setSelectedGame(game);
    bottomSheetRef.current?.openBottomSheet();
  }

  function handleCloseBottomSheet() {
    setSelectedGame(undefined);
  }

  function onSuccessUnsubscribeInMatch() {
    matches.getUserMatches();
    bottomSheetRef.current?.closeBottomSheet();
  }

  return (
    <Screen scrollable noPaddingBottom noPaddingHorizontal>
      <Box paddingHorizontal="s25" flex={1}>
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
          scrollEnabled={false}
          isLoading={matches.isLoading}
          emptyMessage="Suas inscrições de jogos aparecerão aqui"
          onPress={handleOnPressItem}
        />
      </Box>

      <BottomSheet
        ref={bottomSheetRef}
        modalTitle="Aqui esta seu jogo campeão! 🫅"
        onCloseBottomSheet={handleCloseBottomSheet}>
        {selectedGame && (
          <GameDetails
            pressFunction="unsubscribe"
            game={selectedGame}
            onPressSuccess={onSuccessUnsubscribeInMatch}
          />
        )}
      </BottomSheet>
    </Screen>
  );
}
