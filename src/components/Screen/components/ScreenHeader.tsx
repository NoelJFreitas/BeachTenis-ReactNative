import React from 'react';

import {Box, BoxProps, Icon, ScreenProps, Text} from '@components';
// import {useNavigation} from '@react-navigation/native';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'headerComponent'
> &
  BoxProps;

export function ScreenHeader({
  canGoBack,
  title,
  headerComponent,
  ...boxProps
}: ScreenHeaderProps) {
  const headerShow = title || canGoBack || headerComponent;
  // const navigation = useNavigation();
  // const goBack = () => navigation.goBack();

  return (
    <Box flexDirection="row" mb={headerShow ? 's25' : undefined} {...boxProps}>
      {canGoBack && <Icon name="return" onPress={() => {}} />}
      {title && (
        <Box flex={1} alignItems="center" mr={canGoBack ? 's25' : undefined}>
          <Text semibold>{title}</Text>
        </Box>
      )}
      {headerComponent}
    </Box>
  );
}
