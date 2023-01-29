import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBottom} from './TabBottom';
export const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainMenu" component={TabBottom} />
    </Stack.Navigator>
  );
};
