import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";


class AppointmentInfo extends React.Component {

 deleteAppointment = () => {
    console.log("ids", id);
    fetch(`http://localhost:3000/appointments/${this.props.route.params.otherParam.id}`, { method: "DELETE" });
  };

    render(){
			console.log(this.props.route.params.otherParam)
    return(
			<>
        <Text>hello balut
					{this.props.route.params.otherParam.date}
				</Text>
				<Button      
				title='Delete'
				onPress={this.deleteAppointment}
				/>
				</>
    )
}

}

export default AppointmentInfo