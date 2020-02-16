import React, { useState } from 'react';
import { TextInput, View, Text, Image, AsyncStorage, Button } from 'react-native';
const Home = (props) => {
    return (
        <View style={{ padding: 30 }}>
            {/* <Button onPress={() => AsyncStorage.removeItem('userToken')} title="temove token"></Button> */}
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ resizeMode: 'center' }} source={require('../assets/images/logo.png')} />
            </View>
           <View>
               <Text style={{ marginTop: 30, textAlign: 'center', fontWeight: 'bold', fontSize: 18, lineHeight: 30 }}>
                    Product sales in one place 🚀
                </Text>
           </View>
        </View>
    )
}

export default Home;