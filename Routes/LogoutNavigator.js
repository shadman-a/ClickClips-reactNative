
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login/Login'
import Profile from '../Screens/Login/Profile'


export default function HomeScreenNavigator() {
    
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    )
  }