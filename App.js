import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext, Children } from 'react';

import DefaultView from './components/DefaultView';
import LoginPage from './screens/LoginPage';
import Store, { UserDataContext } from './Store';
import Home from './screens/Home';
import ProductList from './screens/ProductList';
import { Notifications } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { authorize } from './services/authorizeUtils';


export default App = () => {
  return (
    <Store>
      <DefaultView />
    </Store>
  )
}