import {RegisterScreen, LoginScreen} from '@screens';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RegisterScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
