import React from "react";
import { View, Text, StyleSheet, Button, DevSettings } from "react-native";
import { Header } from 'react-native-elements';

import { connect } from "react-redux";
import Firebase from "../../config/Firebase";


class Profile extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    DevSettings.reload();
  };


  render() {
    
    return (
      <>
      <Header
      backgroundColor="tomato"
      centerComponent={{ text: 'Settings', style: { color: '#fff', fontWeight: 'bold' } }}
    />
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>{this.props.user.email}</Text>
        <Button title="Logout" onPress={this.handleSignout} />
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "tomato",
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
});


const mapStateToProps = (state) => {
  return {
    user: state.user,
    barbers: state.barbers,
  };
};

export default connect(mapStateToProps,
  )(Profile);
