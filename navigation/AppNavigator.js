import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/LoginPage';
import { UserDataContext } from '../Store';
import AppBottomTabNavigator from './AppBottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [userData] = useContext(UserDataContext);

  const initialRouteName = userData ? 'Home' : 'LoginPage';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="Home" component={AppBottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
