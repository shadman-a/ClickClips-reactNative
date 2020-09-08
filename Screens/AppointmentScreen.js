import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as barberActions from "../redux/actions/barbers";
import { iOSUIKit } from 'react-native-typography';


const actions = {
  ...barberActions,
};


class AppointmentsScreen extends React.Component {

  state = {
    appointmentsArray: [],
  };

  componentDidMount = () => {
    this.props.navigation.addListener('focus', this.fetchAppointments)
    this.props.actions.fetchBarbers();
  };

  fetchAppointments = () => {
    fetch("http://localhost:3000/appointments")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ appointmentsArray: json });
      });
  }

  filterArray=()=> {
    let user = this.state.appointmentsArray.filter(function(user){
      return user.user_id == this.props.user.uid
    })
  }

  render() {
    const Appointment = this.state.appointmentsArray.map((appointment) => 
    {
      const barber = (this.props.barbers.data[appointment.barber_id - 1])
      if(appointment.user_id == this.props.user.uid)
     { return(
        <Card key={appointment.id}>
          <Text style={iOSUIKit.largeTitleEmphasized} >{barber.name}</Text>
          <Text>Date: {appointment.date}</Text>
          <Text>Time: {appointment.time}</Text>
          <Button
            title="More Info"
            onPress={() =>
              this.props.navigation.navigate("AppointmentInfo", {
                otherParam: appointment,
                barberParam: barber
              })
            }
          />
        </Card>
      )}
    })
    return (
      <>
          <ScrollView>{Appointment}</ScrollView>
      </>
    );
  }
}

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
  )(AppointmentsScreen);
