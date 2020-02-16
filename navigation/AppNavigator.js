import React, { useContext } from 'react'
import Home from '../screens/Home';
import LoginPage from '../screens/LoginPage';
import { UserDataContext } from '../Store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default AppNavigator = () => {
  const [userData] = useContext(UserDataContext);

  const initialRouteName = userData ? 'Home' : 'LoginPage';
    return (
        <NavigationContainer 
          onStateChange={state => console.log('New state is', state)}
        >
          <Stack.Navigator initialRouteName={initialRouteName}>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
              <Stack.Screen name="LoginPage" component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
      )
}