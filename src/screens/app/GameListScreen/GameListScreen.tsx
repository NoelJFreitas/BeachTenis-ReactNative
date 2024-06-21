import React, {useRef, useState} from 'react';
import {
  BottomSheet,
  Box,
  GameDetails,
  GameList,
  Screen,
  Text,
} from '@components';
import {useGetAllMatches, Game} from '@domain';

export function GameListScreen() {
  const [selectedGame, setSelectedGame] = useState<Game | undefined>();
  const matches = useGetAllMatches();
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOnPressItem(game: Game) {
    setSelectedGame(game);
    bottomSheetRef.current?.openBottomSheet();
  }

  function handleCloseBottomSheet() {
    setSelectedGame(undefined);
  }

  function onSuccessRegisterInMatch() {
    matches.getAllMatches();
    bottomSheetRef.current?.closeBottomSheet();
  }

  return (
    <Screen noPaddingHorizontal noPaddingBottom>
      <Box paddingHorizontal="s25">
        <Text textAlign="center" bold preset="paragraphLarge" mt="s10">
          Jogos disponíveis
        </Text>
        <GameList
          mt="s30"
          matches={matches.allMatches}
          isLoading={matches.isLoading}
          emptyMessage="Suas inscrições de jogos aparecerão aqui"
          onPress={handleOnPressItem}
        />
      </Box>
      <BottomSheet
        ref={bottomSheetRef}
        modalTitle="Bora jogar! 🎉 "
        onCloseBottomSheet={handleCloseBottomSheet}>
        {selectedGame && (
          <GameDetails
            pressFunction="register"
            game={selectedGame}
            onPressSuccess={onSuccessRegisterInMatch}
          />
        )}
      </BottomSheet>
    </Screen>
  );
}
