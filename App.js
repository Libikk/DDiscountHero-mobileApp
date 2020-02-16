import 'react-native-gesture-handler';
import React from 'react';
import DefaultView from './components/DefaultView';
import Store from './Store';

export default App = () => {
  return (
    <Store>
      <DefaultView />
    </Store>
  )
}