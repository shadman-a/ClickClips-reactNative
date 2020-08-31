import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentScreen from '../Screens/AppointmentScreen';
import AppointmentInfo from '../Components/AppointmentInfo';
import ConfirmationScreen from '../Screens/ConfirmationScreen';


export default function AppointmentScreenNavigator() {
    
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='AppointmentScreen' component={AppointmentScreen} />
        <Stack.Screen name='AppointmentInfo' component={AppointmentInfo} />
        <Stack.Screen name='ConfirmationScreen' component={ConfirmationScreen} />
      </Stack.Navigator>
    )
  }
