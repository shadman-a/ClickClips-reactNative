import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";


class AppointmentInfo extends React.Component {

 deleteAppointment = () => {
		fetch(`http://localhost:3000/appointments/${this.props.route.params.otherParam.id}`, { method: "DELETE" })
		.then(()=>this.props.navigation.popToTop())
  };

    render(){
			return(
				<>
					<Text>
						Date: {this.props.route.params.otherParam.date}</Text>
						<Text>
						Time: {this.props.route.params.otherParam.time}
					</Text>
					<Button      
					title='Edit this Appointment'
					onPress={this.deleteAppointment}
					/>
					<Button      
					title='Delete Appointment'
					color = 'red'
					onPress={this.deleteAppointment}
					/>
					</>
			)
}
}

export default AppointmentInfo