import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentScreen from '../Screens/AppointmentScreen';
import AppointmentInfo from '../Components/AppointmentInfo';
import ConfirmationScreen from '../Screens/ConfirmationScreen';


export default function AppointmentScreenNavigator() {
    
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator initialRouteName='HomeScreen'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name='AppointmentScreen' component={AppointmentScreen} options={{ title: 'Appointments' }} />
        <Stack.Screen name='AppointmentInfo' component={AppointmentInfo} options={{ title: 'Appointment Info' }}/>
        <Stack.Screen name='ConfirmationScreen' component={ConfirmationScreen} />
      </Stack.Navigator>
    )
  }
