import React, { useContext } from 'react'
import Home from '../screens/Home';
import LoginPage from '../screens/LoginPage';
import { UserDataContext } from '../Store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppBottomTabNavigator from '../navigation/AppBottomTabNavigator';

const Stack = createStackNavigator();

export default AppNavigator = () => {
  const [userData] = useContext(UserDataContext);

  const initialRouteName = userData ? 'Home' : 'LoginPage';
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRouteName}>
              <Stack.Screen name="Home" component={AppBottomTabNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      )
}