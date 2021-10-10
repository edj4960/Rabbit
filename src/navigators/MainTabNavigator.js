import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import StoreListScreen from '../screens/StoreListScreen';
import ItemsScreen from '../screens/ItemsScreen';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import appStyles from '../styles/appStyles';
import appColors from '../styles/appColors';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      name="TabMain"
      tabBar={tabsProps => (
          <BottomTabBar {...tabsProps} />
      )}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focus, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'StoreListNav':
              iconName = "store"
              break;
            case 'ItemsNav':
              iconName = 'shopping-cart'
              break;
            default:
              break;
          }
          return (
            <FontAwesomeIcon
              icon={iconName}
              size={size}
              color={color}
            />
          )
        },
        tabBarStyle: appStyles.tabBarStyle,
        tabBarActiveTintColor: appColors.primary,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="StoreListNav"
        component={StoreListScreen}
        options={{ title: 'Stores' }}
      />
      <Tab.Screen
        name="ItemsNav"
        component={ItemsScreen}
        options={{ title: 'Items'}}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator;