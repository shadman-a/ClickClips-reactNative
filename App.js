import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreenNavigator from './Routes/HomeScreenNavigator'
import SettingsScreen from './Screens/SettingsScreen'
import BarbersScreen from './Screens/BarberScreen'
import AppointmentsScreen from './Screens/AppointmentScreen'
import BarberCard from './Components/BarberCard'
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();

export default class App extends React.Component {

render() {
  console.log(this.props)
  return (
    <>
    {/* <NavigationContainer 
    independent={true}
    initialRouteName='Home'
    >
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Make an Appointment" component={BarberCard} />
    </Stack.Navigator>
    </NavigationContainer> */}
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
        <Tab.Screen name="Appointments" component={AppointmentsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
  }
}





  