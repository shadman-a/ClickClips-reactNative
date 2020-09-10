import * as React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "25% off on first order",
          text: "for a limited time",
          image:
            "https://media1.s-nbcnews.com/i/newscms/2020_16/3310511/200415-black-barbershop-2018-ac-1124p_65b03e77692a66fc0c8220f457af9fb5.jpg",
        },
        {
          title: "Hot Towel Shave",
          text: "Now at Burt's",
          image:
            "https://img.grouponcdn.com/deal/iW3X2EPQUUFYuWpRcgAU/1R-2048x1242/v1/c700x420.jpg",
        },
        {
          title: "Tools of the Trade",
          text: " ",
          image:
            "https://refinemenssalon.com/wp-content/uploads/2018/04/Barber-Tools.jpg",
        },
        {
          title: "Our Chickens",
          text: " ",
          image:
            "https://spca.bc.ca/wp-content/uploads/chicken-and-chick-foraging.jpg",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          borderRadius: 10,
          height: 180,
          padding: 20,
          marginLeft: 15,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 40,
        }}
      >
        <Image
          style={{
            width: 290,
            position: "absolute",
            borderRadius: 10,
            height: 180,
            padding: 20,
            marginLeft: 10,
            marginRight: 15,
            marginTop: 10,
            marginBottom: 40,
          }}
          source={{
            uri: item.image,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            color: "white",
            textShadowColor: "rgba(0, 0, 0, 0.95)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: "white",
            textShadowColor: "rgba(0, 0, 0, 0.95)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default MyCarousel;
