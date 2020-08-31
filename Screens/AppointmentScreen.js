import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";

class AppointmentsScreen extends React.Component {
  
  state = {
    appointmentsArray: []
  }


  componentDidMount() {
    fetch('http://localhost:3000/appointments')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ appointmentsArray: json });
      })
  };

  deleteAppointment = (id) => {
    console.log("ids", id)
    fetch(`http://localhost:3000/appointments/${id}`,{ method: "DELETE"}
    )}
  
  
  render() {
    console.log(this.state)
    const Appointment = this.state.appointmentsArray.map((appointment => 
      <Card>
        <Text>{appointment.date}</Text>
        <Text>{appointment.time}</Text>
        <Button
        icon={<Icon name='add' type='material' color='#ffffff'/>}
        title='Delete'
        onPress={this.deleteAppointment(appointment.id)}
      />
      <Button
        icon={<Icon name='add' type='material' color='#ffffff'/>}
        title='Edit'
      />
      </Card>
    ))
    return (
      <>
        <Header
          placement="left"
          backgroundColor="tomato"
          centerComponent={{
            text: "Appointments",
            style: { fontSize: 25, fontFamily: "Helvetica", color: "#fff" },
          }}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Appointments!</Text>
        </View>
      <ScrollView>
        {Appointment}
      </ScrollView>
      </>
    );
  }
}
export default AppointmentsScreen;
