import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, ScrollView } from "react-native";
import { SearchBar, Card } from "react-native-elements";
import MyCarousel from "../Components/MyCarousel";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: "",
      barberArray: [],
      filteredArray: []
   };
    this.fetchBarbers();
  }

  updateSearch = (search) => {
    this.setState({
      search: search,
      filteredArray: this.filteredBarbers(),
    });
  };

  fetchBarbers() {
    fetch("http://localhost:3000/barbers")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ 
          barberArray: json,
          filteredArray: json});
      })
  }

  filteredBarbers = () => {
    return this.state.barberArray.filter((barber) =>
      barber.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
  };
  
  render() {
    const { search } = this.state;
    const Barber = this.state.filteredArray.map((barber) => (
      <View style={styles.card}
      key={barber.id}
      >
        <TouchableOpacity activeOpacity={0.7}  onPress={() =>
            this.props.navigation.navigate("ServicesScreen", {
              otherParam: barber,
            })
          }>
          <View style={styles.container}>
            <View>
              <Image style={styles.image} source={{ uri: 'https://cdn.dribbble.com/users/1846841/screenshots/4961950/epi_x.png' }} />
            </View>
            <Text style={styles.title}>{barber.name}</Text>
            <Text style={styles.description}>$$ . Saludable</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));
    return (
      <>
        <View>
          <SearchBar
            platform="ios"
            placeholder="Find a Barber"
            onChangeText={this.updateSearch}
            value={search}
          />
          <ScrollView>
            <MyCarousel />
            {Barber}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: 320,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  image: {
    height: 150
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 16,
    marginTop: 10
  },
  description: {
    color: '#999',
    marginTop: 5
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 15
  },
  card: {
    alignItems: "center",
    justifyContent: "center"
  }
})
