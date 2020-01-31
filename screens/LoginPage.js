import React, { useState } from 'react';
import { TextInput, View, Text, Button, Image, ImageBackground } from 'react-native';
import axios from 'axios';
import updatePushNotificationToken from '../updatePushNotificationToken';
import appConfig from '../appConfig';
import { Sentry } from '../errorHandler';

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

        axios.post(`${appConfig.ddiscountHeroUrl}/api/auth/login`, data)
            .then(res => {
                props.setIsUserLoggedIn(true);
                updatePushNotificationToken()
                    .then(e => console.log('Successfully updated  token'))
                    .catch(err => console.log('Error', err));
            })
            .catch((err) => {
                setIsError(true)

                console.log('err: ', err);
                Sentry.withScope((scope) => {
                    scope.setExtra('email', { email });
                    Sentry.captureException(err);
                });
            })
    }

    return (
        <View style={{ padding: 30 }}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ resizeMode: 'center' }} source={require('../assets/images/logo.png')} />
            </View>
            <View style={{ margin: 40, alignItems:'center' }}>
                <TextInput 
                    style={{ marginTop: 20, fontSize: 20 }}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
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
                    <Text style={{ padding: 5, textAlign: 'center', marginBottom: 16, color: 'red', borderColor: 'red', borderWidth: 1, borderStyle: 'solid', width: '60%' }}>Invalid email or password</Text>
                </View>
            }
            <Button color='#249624' title="Login" onPress={login}/>
        </View>
    )
}

export default LoginPage;