import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';



function AppointmentsScreen() {
    return (
      <>
      <Header
        placement="left"
        backgroundColor="tomato"
        centerComponent={{ text: 'Appointments', style: {fontSize: '25', fontFamily:'Helvetica',color: '#fff' } }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Appointments!</Text>
      </View>
      </>
    );
  }
export default AppointmentsScreen