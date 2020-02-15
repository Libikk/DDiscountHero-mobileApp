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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userData, setUserData] = useContext(UserDataContext)
  
  useEffect(() => {
    Notifications.addListener(handleNotification)
    console.log('useEffect: ');
    authorize()
      .then(res => {
        setUserData(res)
        setIsUserLoggedIn(true)
        console.log('userData: ', userData);
      })
      .catch(err => {
        console.log('err: ', err);
      })

  }, []);

  const initialRouteName = isUserLoggedIn ? 'Home' : 'LoginPage';
  console.log('initialRouteName: ', initialRouteName);

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