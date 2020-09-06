import * as React from 'react';
import {
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity
} from 'react-native'
import Tag from '../Components/Tag'


class ServicesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.scrollY = new Animated.Value(0)
    this.state = { 
      servicesArray: [],
   };
    this.fetchServices();
  }

  fetchBarbers() {
    fetch("http://localhost:3000/services")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ 
          barberArray: json
        });
      })
  }

  render() {
    const Service = this.state.servicesArray.map((service) => (
      <View style={styles.card}
      key={service.id}
      >
        <TouchableOpacity activeOpacity={0.7}  onPress={() =>
            this.props.navigation.navigate("BarberCard")
          }>
          <View style={styles.container}>
            <Text style={styles.title}>{service.name}</Text>
            <Text style={styles.description}>{service.description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

    const headerContainerWidth = this.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: ['90%', '100%'],
      extrapolate: 'clamp'
    })

    const imageContainerHeight = this.scrollY.interpolate({
      inputRange: [-200, 0],
      outputRange: [450, 250],
      extrapolate: 'extend'
    })

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.imageContainer, { height: imageContainerHeight }]}>
          <Image style={styles.image} source={{ uri: 'https://cdn.dribbble.com/users/1846841/screenshots/4961950/epi_x.png' }} />
        </Animated.View>
        <ScrollView onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollY } } }])}
          scrollEventThrottle={16}
          stickyHeaderIndices={[1]}
          style={styles.scrollViewContainer}
        >
          {Service}
          <View style={styles.stickyHeaderContainer}>
            <Animated.View style={[styles.headerContainer, { width: headerContainerWidth }]}></Animated.View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  scrollViewContainer: {
    flex: 1
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    backgroundColor: '#fff'
  },
  stickyHeaderContainer: {
    position: 'absolute',
    top: 125,
    left: 0,
    right: 0
  },
  headerContainer: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  contentContainer: {
    marginTop: 290,
    backgroundColor: '#eee'
  },
  image: {
    flex: 1
  },
  item: {
    alignItems: "center",
    justifyContent: "center"
  },
  cardContainer: {
    width: 320,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  cardImage: {
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
  
export default ServicesScreen