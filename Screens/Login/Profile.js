import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { connect } from "react-redux";
import Firebase from "../../config/Firebase";
import { bindActionCreators } from "redux";
import * as barberActions from "../../redux/actions/barbers";

const actions = {
  ...barberActions,
};

class Profile extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  componentDidMount() {
    this.props.actions.fetchBarbers();
  } 

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>{this.props.user.email}</Text>
        <Button title="Logout" onPress={this.handleSignout} />
      </View>
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});     

const mapStateToProps = (state) => {
  return {
    user: state.user,
    barbers: state.barbers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps,
  )(Profile);
