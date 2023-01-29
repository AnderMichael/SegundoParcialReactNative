/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeApp} from './src/components/HomeApp';
import {TabBottom} from './src/navigation/TabBottom';

export const App = () => {
  return (
    <NavigationContainer>
      <HomeApp />
    </NavigationContainer>
  );
};

export default App;
