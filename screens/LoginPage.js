import React, { useState } from 'react';
import { TextInput, View, Text, Button, Image } from 'react-native';
import axios from 'axios';

const LoginPage = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isError, setIsError ] = useState(false);
    
    const login = () => {
        const data = {
            email, 
            password,
        }
        setIsError(false)

        axios.post('https://ddiscounthero.com/api/auth/login', data)
            .then(res => {
                props.setIsUserLoggedIn(true);
                console.log('res: ', res.data);
            })
            .catch((err) => {
                setIsError(true)
                console.log('err: ', err);
            })
    }

    return (
        <View>
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
            {
                isError && 
                <View style={{ alignItems:'center' }}>
                    <Text style={{ padding: 5, textAlign: 'center', marginBottom: 16, color: 'red', borderColor: 'red', borderWidth: 1, borderStyle: 'solid', width: '60%' }}>Invalid email or password.</Text>
                </View>
            }
            <Button title="Login" onPress={login}/>
        </View>
    )
}

export default LoginPage;