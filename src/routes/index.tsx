import * as React from 'react';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CreditsScreen from '../screens/CreditsScreen';
import FirstAidKitPage from '../screens/FirstAidKitScreen';

import { Pressable, TouchableOpacity, View, Text, Linking } from 'react-native';
import TutorialsScreen from '../screens/TutorialsScreen';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FirstAidKitScreen from '../screens/FirstAidKitScreen';


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstAidKit"
        component={FirstAidKitScreen}
        options={{ title: 'Kit de Primeiros Socorros'}}
        
      />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 10, marginTop: '130%' }} />
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
  const handleEmergencyCall = () => {
    const phoneNumber = '190'; // Número de emergência

    Linking.openURL(`tel:${phoneNumber}`);
  };

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
              })}
              onPress={handleEmergencyCall}>
              <Entypo
                name='phone'
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
      <Drawer.Screen
        name="FirstAidKit"
        component={FirstAidKitScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="briefcase-medical" size={22} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#cc2229',
          },
          title: 'Primeiros Socorros',
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
