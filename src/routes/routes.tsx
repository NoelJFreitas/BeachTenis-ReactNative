import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppTab';
import {ActivityIndicator, Box} from '@components';
import {ViewStyle} from 'react-native';
import {useAuthCredentials} from '@services';

export function Routes() {
  const {isLoading, credentials} = useAuthCredentials();

  if (isLoading) {
    return (
      <Box style={$container}>
        <ActivityIndicator />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {credentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
