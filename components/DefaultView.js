import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';

import LoginPage from '../screens/LoginPage';
import Store, { UserDataContext } from '../Store';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';
import { Notifications } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { authorize } from '../services/authorizeUtils';


export default DefaultView = (props) => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const handleNotification = notification => setDiscountedProducts(notification.data.products);

  useEffect(() => {
    Notifications.addListener(handleNotification)

  }, []);

  const initialRouteName = props.userData ? 'Home' : 'LoginPage';
  const Stack = createStackNavigator();

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