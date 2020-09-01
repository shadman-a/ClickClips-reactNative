import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";

class AppointmentsScreen extends React.Component {
  state = {
    appointmentsArray: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/appointments")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ appointmentsArray: json });
      });
  }

  render() {
    console.log(this.state);
    const Appointment = this.state.appointmentsArray.map((appointment) => (
      <Card>
        <Text>{appointment.date}</Text>
        <Text>{appointment.time}</Text>
        <Button
          icon={<Icon name="add" type="material" color="#ffffff" />}
          title="More Info"
          onPress={() =>
            this.props.navigation.navigate("AppointmentInfo", {
              otherParam: appointment,
            })
          }
        />
      </Card>
    ));
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Appointments!</Text>
        </View>
        <ScrollView>{Appointment}</ScrollView>
      </>
    );
  }
}
export default AppointmentsScreen;
