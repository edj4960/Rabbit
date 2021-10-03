import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import StoreScreen from '../screens/StoreScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator name="Root">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainTabNavigator}
        />
        <Stack.Screen
          name="Store"
          component={StoreScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;