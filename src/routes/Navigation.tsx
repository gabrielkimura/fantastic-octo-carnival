import * as React from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CreditsScreen from '../screens/CreditsScreen';
import { Pressable, TouchableOpacity } from 'react-native';

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
          headerRight: () => (
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name='lightbulb'
                size={25}
                color={'yellow'}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <Drawer.Screen
        name="Credits"
        component={CreditsScreen}
        options={({ navigation }) => ({
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
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="logout" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}
