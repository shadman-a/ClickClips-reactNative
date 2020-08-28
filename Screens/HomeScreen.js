import * as React from 'react';
import { Text, View, Button, Alert, ScrollView } from 'react-native';
import { SearchBar, Header, Card  } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import ShopShow from '../Components/ShopShow'


export default class HomeScreen extends React.Component {
  state = {
    search: "",
    barberArray: this.props.barbers,
  };
  
  updateSearch = (search) => {
    this.setState({ 
      search: search,
      barberArray: this.filteredBarbers()
    });
  };

  getBarber = () => {
    return this.state.barberArray.map(barber => <ShopShow key={barber.id} barber={barber}/>)
  }

  filteredBarbers = () => {
    return this.props.barbers.filter(barber => barber.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    console.log(this.state)
    const { search } = this.state;
    return (
      <>
      <Header
        placement="left"
        backgroundColor="tomato"
        centerComponent={{ text: 'Home', style: {fontSize: 25, fontFamily:'Helvetica',color: '#fff' } }}
      />
      <View>  
      <SearchBar  
        platform = "ios"
        placeholder="Find a Barber"
        onChangeText={this.updateSearch}
        value={search}
      />
    <ScrollView>
      {this.getBarber()}
    </ScrollView>
      </View>
      </>
    );
  }
}



