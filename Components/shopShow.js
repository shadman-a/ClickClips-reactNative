import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Header, Card, Icon, Button } from 'react-native-elements';


function ShopShow(props) {
    return (
      <View>
        <Card
        title={props.barber.name}>
  <Button
    icon={<Icon name='plus' color='#ffffff'/>}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Book Now'/>
        </Card>
      </View>
    );
  }

export default ShopShow