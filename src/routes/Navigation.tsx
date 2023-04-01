import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CreditsScreen from '../screens/CreditsScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();
export function RootDrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Credits" component={CreditsScreen} />
    </Drawer.Navigator>
  );
}
