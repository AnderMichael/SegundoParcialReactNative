import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBottom} from './TabBottom';
import { ScreenExplore } from '../screens/ScreenExplore';
export const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false, contentStyle:{borderRadius:30}}} >
      <Stack.Screen name="MainMenu" component={ScreenExplore} />
    </Stack.Navigator>
  );
};