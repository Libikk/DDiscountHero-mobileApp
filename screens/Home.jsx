import React from 'react';
import { View, Text, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Home = (props) => {
  const logout = () => {
    AsyncStorage.removeItem('userToken');
    props.navigation.navigate('LoginPage');
  };
  return (
    <View style={{ padding: 30 }}>
      <TouchableOpacity onPress={logout}>
        <MaterialCommunityIcons name="logout" />
      </TouchableOpacity>
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ resizeMode: 'center' }} source={require('../assets/images/logo.png')} />
      </View>
      <View>
        <Text style={{ marginTop: 30, textAlign: 'center', fontWeight: 'bold', fontSize: 18, lineHeight: 30 }}>
          Discounts on products you love in one place 🚀
        </Text>
      </View>
    </View>
  );
};

export default Home;
