import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

export default class BarberCard extends React.Component {
 render(){
     console.log(this.props)
     return(
         <view>
             <Text>Hello</Text>
         </view>
     )
 }
}
