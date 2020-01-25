import React, { useState } from 'react';
import { TextInput, View, Text, Button, Image, ImageBackground } from 'react-native';

const Home = (props) => {

    return (
        <View style={{ padding: 30 }}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ resizeMode: 'center' }} source={require('../assets/images/logo.png')} />
            </View>
           <View>
               <Text style={{ marginTop: 30, textAlign: 'center', fontWeight: 'bold', fontSize: 18, lineHeight: 30 }}>
                   Success!
                </Text>
               <Text style={{ marginTop: 30, textAlign: 'center', fontWeight: 'bold', fontSize: 18, lineHeight: 30 }}>
                   Application is ready to send you notifications :)
                </Text>
           </View>
        </View>
    )
}

export default Home;