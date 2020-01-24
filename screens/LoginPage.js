import React, { useState } from 'react';
import { TextInput, View, Text, Button, Image } from 'react-native';

const LoginPage = (props) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    const login = () => {
        console.log('email: ', email);
        console.log('password: ', password);
        const data = {
            email, 
            password,
        }
        console.log('data: ', data);
        fetch('https://ddiscounthero.com/api/auth/login', { 
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(data) 
        })
            .then((response) => response.json())
            .then(res => {
                console.log('res: ', res);
                console.log('props: ', props);
                //props.setIsUserLoggedIn(true)
            })
            .catch(console.error)
    }

    return (
        <View>
            <Text>JA PIERDOLE</Text>
            <View >
                <Image style={{ width: '100%' }} source={require('../assets/images/logo.png')} />
            </View>
            <View style={{ margin: 40, alignItems:'center' }}>
                <TextInput 
                    style={{ marginTop: 20, fontSize: 20 }}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='email'
                    />
                <TextInput 
                    style={{ marginTop: 20, fontSize: 20 }}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                />
            </View>
            <Button title="Login" onPress={login}/>
        </View>
    )
}

export default LoginPage;