import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';



function SettingsScreen() {
    return (
      <>
       <Header
        placement="left"
        backgroundColor="tomato"
        centerComponent={{ text: 'Settings', style: {fontSize: 25, fontFamily:'Helvetica',color: '#fff' } }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
      </>
    );
  }
export default SettingsScreen