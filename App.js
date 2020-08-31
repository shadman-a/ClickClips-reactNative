import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreenNavigator from './Routes/HomeScreenNavigator'
import SettingsScreen from './Screens/SettingsScreen'
import BarbersScreen from './Screens/BarberScreen'
import AppointmentsScreen from './Screens/AppointmentScreen'
import AppointmentScreenNavigator from './Routes/AppointmentScreenNavigator'


const Tab = createBottomTabNavigator();

export default class App extends React.Component {

render() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName =  'ios-home';
            } else if (route.name === 'Barbers') {
              iconName = 'ios-map';
            }else if (route.name === 'Appointments') {
              iconName = 'ios-calendar';
            }else if (route.name === 'Settings') {
              iconName = 'ios-cog';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreenNavigator}/>
        <Tab.Screen name="Barbers" component={BarbersScreen} />
        <Tab.Screen name="Appointments" component={AppointmentScreenNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
  }
}





  