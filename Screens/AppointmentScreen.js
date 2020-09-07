import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";
import { connect } from "react-redux";

class AppointmentsScreen extends React.Component {

  state = {
    appointmentsArray: [],
  };

  componentDidMount = () => {
    this.props.navigation.addListener('focus', this.fetchAppointments)
  };

  fetchAppointments = () => {
    fetch("http://localhost:3000/appointments")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ appointmentsArray: json });
      });
  }

  filterArray=()=> {
    console.log("filter", this.props.user.uid)
    let user = this.state.appointmentsArray.filter(function(user){
      return user.user_id == this.props.user.uid
    })
    console.log(user)
  }

  render() {
    const Appointment = this.state.appointmentsArray.map((appointment) => 
    {
      if(appointment.user_id == this.props.user.uid)
     { return(
        <Card key={appointment.id}>
          <Text>{appointment.date}</Text>
          <Text>{appointment.time}</Text>
          <Button
            title="More Info"
            onPress={() =>
              this.props.navigation.navigate("AppointmentInfo", {
                otherParam: appointment,
              })
            }
          />
        </Card>
      )}
    })
    return (
      <>
        <View>
          <ScrollView>{Appointment}</ScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AppointmentsScreen);
