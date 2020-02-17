import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { Notifications } from 'expo';
import { Text } from 'react-native';
import { UserDataContext } from '../Store';
import AppNavigator from '../navigation/AppNavigator';
import AppBottomTabNavigator from '../navigation/AppBottomTabNavigator';
import { authorize } from '../services/authorizeUtils';
import { Sentry } from '../errorHandler';
import { loadData } from '../services/localStorageService';

const DefaultView = (props) => {
  const [discountedProducts, setDiscountedProducts] = useState([]);

  const handleNotification = (notification) => setDiscountedProducts(notification.data.products);

  const [, setUserData] = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Notifications.addListener(handleNotification);
    authorize()
      .then((res) => setUserData(res))
      .catch(async (err) => {
        const userToken = await loadData('userToken');
        Sentry.withScope((scope) => {
          // eslint-disable-next-line no-undef
          scope.setExtra('userData', { userToken, isDev: __DEV__ });
          Sentry.captureException(err);
        });
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    isLoading ? <Text>LOADING....</Text> : <AppNavigator {...props} />
  );
};

export default DefaultView;
