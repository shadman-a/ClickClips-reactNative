import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { Header } from "react-native-elements";

class ConfirmationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Confirmed!</Text>
      </View>
    );
  }
}

export default ConfirmationScreen;
