import 'react-native-gesture-handler';
import React from 'react';
import DefaultView from './components/DefaultView';
import Store from './Store';

const App = () => (
  <Store>
    <DefaultView />
  </Store>
);

export default App;
