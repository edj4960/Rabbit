import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import StoreScreen from '../screens/StoreScreen';
import appColors from '../styles/appColors';

const Stack = createStackNavigator();

const RootNavigator = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator name="Root" screenOptions={{
        headerBackTitleStyle: {
          color: appColors.primary
        }
      }}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainTabNavigator}
        />
        <Stack.Screen
          name="Store"
          component={StoreScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: appColors.backgroundLight,
              shadowColor: appColors.backgroundLight,
            },
            headerTintColor: appColors.primary
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;