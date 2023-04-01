import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

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

const Drawer = createDrawerNavigator();
export function RootDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={'black'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Credits"
        component={CreditsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="info" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
