import React from 'react';
import Home from './src/layar/home';
import HasilPage from './src/layar/HasilPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="HasilPage" component={HasilPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;