import React from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';
import {ScreenHeader, ScrollViewContainer, ViewContainer} from './components';
import {useAppTheme, useAppSafeArea} from '@hooks';
import {Box, BoxProps} from '@components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
  noHeader?: boolean;
  noPaddingHorizontal?: boolean;
  noPaddingBottom?: boolean;
  headerComponent?: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  noPaddingHorizontal = false,
  noPaddingBottom = false,
  canGoBack = false,
  style,
  headerComponent,
  title,
  ...boxProps
}: ScreenProps) {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const canHeader = !!title || !!headerComponent || canGoBack;

  return (
    <KeyboardAvoidingView
      style={$container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          flex={1}
          paddingHorizontal={noPaddingHorizontal ? undefined : 's25'}
          style={{
            paddingTop: top,
            paddingBottom: noPaddingBottom ? undefined : bottom,
          }}>
          {canHeader && (
            <ScreenHeader
              canGoBack={canGoBack}
              title={title}
              headerComponent={headerComponent}
              paddingHorizontal={noPaddingHorizontal ? 's25' : undefined}
            />
          )}
          <Box flex={1} style={style} {...boxProps}>
            {children}
          </Box>
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const $container: ViewStyle = {
  flex: 1,
};
