import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { Notifications } from 'expo';
import { Text } from 'react-native';
import { UserDataContext } from '../Store';
import AppNavigator from '../navigation/AppNavigator';
import { authorize } from '../services/authorizeUtils';

export default DefaultView = (props) => {
  const [discountedProducts, setDiscountedProducts] = useState([]);

  const handleNotification = notification => setDiscountedProducts(notification.data.products);

  const [, setUserData] = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Notifications.addListener(handleNotification)
    authorize()
      .then(res => setUserData(res))
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    isLoading ? <Text>LOADING....</Text> : <AppNavigator {...props}/>
  )
}