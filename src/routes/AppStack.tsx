import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';
import React from 'react';

export type AppStackParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
