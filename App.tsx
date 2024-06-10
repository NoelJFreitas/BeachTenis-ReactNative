import {Text} from '@components';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import React from 'react';
import {View} from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Teste</Text>
      </View>
    </ThemeProvider>
  );
}
