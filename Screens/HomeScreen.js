import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import ShopShow from '../Components/shopShow'




export default class HomeScreen extends React.Component {

    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };


  HomeStackScreen() {
    const HomeStack = createStackNavigator();
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={ShopShow} />
      </HomeStack.Navigator>
    );
  }
    
  render() {
    const { search } = this.state;

    return (
      <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <SearchBar
        style = "" 
        platform = "ios"
        placeholder="Find a Barber"
        onChangeText={this.updateSearch}
        value={search}
      />
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ShopShow')}
      />
      </View>
      </>
    );
  }
}



