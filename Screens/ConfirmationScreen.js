import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { Header } from "react-native-elements";

class ConfirmationScreen extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Confirmed!</Text>
        <Button title="Go Back to Home" onPress={()=>this.props.navigation.popToTop()} />
      </View>
    );
  }
}

export default ConfirmationScreen;
