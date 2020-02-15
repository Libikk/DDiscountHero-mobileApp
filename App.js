import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, Button, Image, ImageBackground } from 'react-native';
import DefaultView from './components/DefaultView';
import Store from './Store';
import { authorize } from './services/authorizeUtils';

export default App = () => {
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    authorize()
      .then(res => {
        setUserData(res)
      })
      .catch(err => {
        console.log('err: ', err);
      })
      .finally(() => {
        setIsLoading(false)
      })

  }, []);


  return (
    <Store>
      {isLoading ? <Text>LOADING....</Text> : <DefaultView userData={userData}/>}
    </Store>
  )
}