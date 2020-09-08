import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';



class MyCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"50% off Haircut",
              text: "For first time customers",
          },
          {
              title:"Lorem ipsum",
              text: "Now at Burt's",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          }
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'tomato',
              borderRadius: 10,
              height: 180,
              padding: 50,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              marginBottom: 20}}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, paddingTop: 50 }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

export default MyCarousel