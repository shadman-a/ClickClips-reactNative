import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'
import BarbersScreen from './Screens/BarberScreen'
import AppointmentsScreen from './Screens/AppointmentScreen'


const Tab = createBottomTabNavigator();

export default class App extends React.Component {

    state = {
      barbers: []
    }
   

  componentDidMount() {
    fetch('http://localhost:3000/barbers')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ barbers: json });
      })
  };

render() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        }}
      >
        <Tab.Screen name="Home" children={()=><HomeScreen barbers={this.state.barbers}/>}/>
        <Tab.Screen name="Barbers" component={BarbersScreen} />
        <Tab.Screen name="Appointments" component={AppointmentsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
}