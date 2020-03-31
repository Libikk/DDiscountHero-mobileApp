import React from 'react';
import { View, Text, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Colors from '../constants/Colors';

const Home = (props) => {
  const logout = () => {
    AsyncStorage.removeItem('userToken');
    props.navigation.navigate('LoginPage');
  };
  return (
    <View style={{ padding: 30 }}>
      <TouchableOpacity onPress={logout}>
        <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
          <MaterialCommunityIcons name="logout" size={28} color={Colors.tintColor} />
        </View>
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
