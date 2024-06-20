import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  GameListScreen,
  HomeScreen,
  NewGameScreen,
  ProfileScreen,
} from '@screens';
import React from 'react';
import {AppTabBar} from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  GameListScreen: undefined;
  NewGameScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppStack() {
  function renderTab(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderTab}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewGameScreen" component={NewGameScreen} />
      <Tab.Screen name="GameListScreen" component={GameListScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
