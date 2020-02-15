import React from 'react'
import Home from '../screens/Home';
import LoginPage from '../screens/LoginPage';

export default AppNavigator = (props) => {
    return (
        <NavigationContainer 
        onStateChange={state => console.log('New state is', state)}
        >
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
              <Stack.Screen name="LoginPage" component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
      )
}