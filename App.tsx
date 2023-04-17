import * as React from 'react';
import Routes from './src/routes';

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <Routes/>
    </SafeAreaProvider>
  );
}