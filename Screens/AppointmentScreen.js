import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as barberActions from "../redux/actions/barbers";
import { iOSUIKit } from "react-native-typography";
import Tag from '../Components/Tag'

const actions = {
  ...barberActions,
};

class AppointmentsScreen extends React.Component {
  state = {
    appointmentsArray: [],
  };

  componentDidMount = () => {
    this.props.navigation.addListener("focus", this.fetchAppointments);
    this.props.actions.fetchBarbers();
  };

  fetchAppointments = () => {
    fetch("http://localhost:3000/appointments")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ appointmentsArray: json });
      });
  };

  render() {
    const Appointment = this.state.appointmentsArray.map((appointment) => {
      const barber = this.props.barbers.data[appointment.barber_id - 1];
      if (appointment.user_id == this.props.user.uid) {
        return (
          <Card key={appointment.id}>
            <Text style={iOSUIKit.title3}>{barber.name}</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Tag>Date: {appointment.date}</Tag>
            <Tag>Time: {appointment.time}</Tag>
            </View>
            <Button
              title="More Info"
              onPress={() =>
                this.props.navigation.navigate("AppointmentInfo", {
                  otherParam: appointment,
                  barberParam: barber,
                })
              }
            />
          </Card>
        );
      }
    });
    return (
      <View>
        {this.state.appointmentsArray.length == 0 ? (
           <Text style={iOSUIKit.body, {textAlign: "center"}}>No Appointments 😅</Text>
        ) : (
          <ScrollView>{Appointment}</ScrollView>
        )}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    barbers: state.barbers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsScreen);
