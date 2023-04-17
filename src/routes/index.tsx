import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CreditsScreen from '../screens/CreditsScreen';
import { Pressable, TouchableOpacity, View, Text, Linking } from 'react-native';
import TutorialsScreen from '../screens/TutorialsScreen';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 10, marginTop: '150%' }} />
      <Text style={{ marginHorizontal: 16, marginTop: 5, fontSize: 10, color: '#888' }}>
        Este é um software de código aberto licenciado sob a Licença MIT. © 2023
        <Text
          style={{ textDecorationLine: 'underline', }}
          onPress={() => Linking.openURL('https://github.com/GabrielMassao')}
        >
          github/GabrielMassao
        </Text>
      </Text>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export function RootDrawerNavigator() {
  return(
  <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#cc2229',
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
            <MaterialIcons name="home" size={24} color={color} />
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
        name="Tutoriais"
        component={TutorialsScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="youtube-studio" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#cc2229',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="logout" size={24} color="#fff" style={{ marginRight: 10}}/>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Créditos"
        component={CreditsScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color }) => (
            <MaterialIcons name="info" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#cc2229',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="logout" size={24} color="#fff" style={{ marginRight: 10}}/>
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}
