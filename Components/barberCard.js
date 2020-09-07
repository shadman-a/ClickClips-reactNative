import * as React from "react";
import { Text, View, Button, Alert } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import { connect } from "react-redux";
import { WebView } from 'react-native-webview';




class BarberCard extends React.Component {
  state = {
    date: null,
    time: null,
	};
	
  timePicker = () => {
    if (this.state.date !== null) {
      return (
        <DateTimePicker
					value= { new Date() }
					mode="time"
          is24Hour="false"
          display="default"
          onChange={this.time}
        />
      );
    }
  };

  time = (e, date) => {
		let newTime = new Date(date).toLocaleTimeString();
    this.setState({
      time: newTime   
    });
  };

  submitButton = () => {
    if (this.state.time !== null) {
      return (
      <Button title="Book Now" onPress={this.postAppointment}></Button>
     );
    }
  };

  postAppointment = () => {
    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        date: this.state.date,
        time: this.state.time,
        barber_id: this.props.route.params.otherParam.id,
        user_id: this.props.user.uid,
      }),
    }).then(() => this.props.navigation.navigate("ConfirmationScreen"));
  };

  render() {
    return (
      <>
       <View
          style={{  justifyContent: "center", alignItems: "center" }}
        >
          <Text>{this.props.route.params.otherParam.name}</Text>
          <Text>{this.state.date}</Text>
          <Text>{this.state.time}</Text>
        </View>
        <Calendar
          minDate={Date()}
          onDayPress={(day) => {
            this.setState({
              date: day.dateString,
            });
          }}
        />
        
        {this.timePicker()}
        {this.submitButton()}
       
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(BarberCard);
