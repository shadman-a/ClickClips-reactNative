import * as React from 'react';
import { Text, View, Button, Alert, ScrollView, Icon  } from 'react-native';
import { SearchBar, Header, Card  } from 'react-native-elements';


class HomeScreen extends React.Component {
  
  state = {
    search: "",
    barberArray: [],
    filteredArray: []
  };
  
  updateSearch = (search) => {
    this.setState({ 
      search: search,
      filteredArray: this.filteredBarbers()
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/barbers')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ barberArray: json });
      })
  };

  filteredBarbers = () => {
    return this.state.barberArray.filter(barber => barber.name.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    const { search } = this.state;
    const Barber = this.state.filteredArray.map((barber => 
    <Card>
      <Text>{barber.name}</Text>
      <Button
      icon={<Icon name='add' type='material' color='#ffffff'/>}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Book Now'
      onPress={() =>  this.props.navigation.navigate('BarberCard', {
        otherParam: barber
      })
    }
      />
    </Card>
    ))
    return (
      <>
      <View>  
      <SearchBar  
        platform = "ios"
        placeholder="Find a Barber"
        onChangeText={this.updateSearch}
        value={search}
      />
    <ScrollView>
        {Barber}
    </ScrollView>
      </View>

      </>
    );
  }
}

export default HomeScreen;



