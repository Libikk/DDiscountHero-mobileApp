import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';

const Tab = createBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ProductList"
      component={ProductList}
      options={{
        tabBarLabel: 'Products on Sale',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppBottomTabNavigator = () => (
  <MyTabs />
);

export default AppBottomTabNavigator;
