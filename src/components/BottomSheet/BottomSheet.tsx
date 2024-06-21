import {ViewStyle} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {Box, Text} from '@components';

export interface BottomSheet {
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
}

interface Props {
  children: React.ReactNode;
  onCloseBottomSheet?: () => void;
  modalTitle?: string;
}

export const BottomSheet = forwardRef<BottomSheet, Props>(
  ({children, onCloseBottomSheet, modalTitle}, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '40%', '60%', '90%'], []);

    useImperativeHandle(ref, () => ({
      openBottomSheet,
      closeBottomSheet,
    }));

    // open
    const openBottomSheet = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);

    const closeBottomSheet = useCallback(() => {
      onCloseBottomSheet ? onCloseBottomSheet() : undefined;
      bottomSheetModalRef.current?.close();
    }, [onCloseBottomSheet]);

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1) {
          onCloseBottomSheet ? onCloseBottomSheet() : undefined;
        }
      },
      [onCloseBottomSheet],
    );

    // renders
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={3}
          containerStyle={$container}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetView style={$contentContainer}>
            {modalTitle && (
              <Box alignItems="center" paddingBottom="s10">
                <Text preset="paragraphSmall" semibold>
                  {modalTitle}
                </Text>
              </Box>
            )}
            {children}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

const $container: ViewStyle = {
  backgroundColor: 'rgba(0,0,0,0.4)',
};

const $contentContainer: ViewStyle = {
  flex: 1,
};
