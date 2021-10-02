import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const RootNavigator = props => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator name="Root">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;