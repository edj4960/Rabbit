import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import StoreListScreen from '../screens/StoreListScreen';
import ItemsScreen from '../screens/ItemsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

  return (
    <Tab.Navigator
      name="TabMain"
      tabBar={tabsProps => (
          <BottomTabBar {...tabsProps} />
      )}
    >
      <Tab.Screen
        name="StoreListNav"
        component={StoreListScreen}
      />
      <Tab.Screen
        name="ItemsNav"
        component={ItemsScreen}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator;