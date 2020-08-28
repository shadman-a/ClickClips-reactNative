import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Header, Card, Icon, Button } from 'react-native-elements';
import { navigation } from '@react-navigation/native';
import { BarberCard } from "./BarberCard";



export default class ShopShow extends React.Component {

 clickHandler = () => {
  navigation.push('BarberCard') 
}

//  <BarberCard barber={this.props.barber}/>
  render(){
  return (
      <View>
        <Card
        title={this.props.barber.name}>
    <Button
      icon={<Icon name='add' type='material' color='#ffffff'/>}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Book Now'
      onPress={this.clickHandler}/>
      </Card>
      </View>
    );
  }
}

