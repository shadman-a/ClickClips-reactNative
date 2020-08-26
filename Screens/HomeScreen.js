import * as React from 'react';
import { Text, View, Button, Alert, ScrollView } from 'react-native';
import { SearchBar, Header, Card  } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import ShopShow from '../Components/ShopShow'


export default class HomeScreen extends React.Component {

  state = {
    search: '',
  };
  
  updateSearch = (search) => {
    this.setState({ search });
  };

  getCharacter = () => {
    return this.props.barbers.map(barber => <ShopShow key={barber.id} barber={barber}/>)
}

  render() {
    const { search } = this.state;
    console.log(this.props.barbers)
    return (
      <>
      <Header
        placement="left"
        backgroundColor="tomato"
        centerComponent={{ text: 'Home', style: {fontSize: 25, fontFamily:'Helvetica',color: '#fff' } }}
      />
      <View >  
      <SearchBar
        style = "" 
        platform = "ios"
        placeholder="Find a Barber"
        onChangeText={this.updateSearch}
        value={search}
      />
    <ScrollView>
      {this.getCharacter()}
    </ScrollView>
      </View>
      </>
    );
  }
}



