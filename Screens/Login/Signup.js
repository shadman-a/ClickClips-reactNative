import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Firebase from "../../config/Firebase";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateName,
  signup,
} from "../../redux/actions/user";

class Signup extends React.Component {
  handleSignUp = () => {
    this.postUser();
    this.props.signup();
    this.props.navigation.navigate("TabNavigator");
  };

  postUser = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: this.props.user.name,
        username: this.props.user.email,
      }),
  })
}

  render() {
    console.log(this.props.user.name)
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.props.user.name}
          onChangeText={(name) => this.props.updateName(name)}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.email}
          onChangeText={(email) => this.props.updateEmail(email)}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.password}
          onChangeText={(password) => this.props.updatePassword(password)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword,updateName, signup }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
