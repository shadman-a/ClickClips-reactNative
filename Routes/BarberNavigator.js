import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BarberScreen from '../Screens/BarberScreen';
import BarberCard from '../Components/BarberCard';
import ConfirmationScreen from '../Screens/ConfirmationScreen';


export default function HomeScreenNavigator() {
    
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator initialRouteName='BarberScreen'>
        <Stack.Screen name='BarberScreen' component={BarberScreen} />
        <Stack.Screen name='BarberCard' component={BarberCard} />
        <Stack.Screen name='ConfirmationScreen' component={ConfirmationScreen} />
      </Stack.Navigator>
    )
  }