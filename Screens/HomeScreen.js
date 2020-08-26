import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import ShopShow from '../Components/shopShow'

export default class HomeScreen extends React.Component {

  state = {
      search: '',
  };
  
  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <>
      <Header
        placement="left"
        backgroundColor="tomato"
        centerComponent={{ text: 'Home', style: {fontSize: '25', fontFamily:'Helvetica',color: '#fff' } }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <SearchBar
        style = "" 
        platform = "ios"
        placeholder="Find a Barber"
        onChangeText={this.updateSearch}
        value={search}
      />
      <Text>Home!</Text>
      </View>
      </>
    );
  }
}



