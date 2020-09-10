import * as React from "react";
import { Text, View, Image, ScrollView, Button, Icon } from "react-native";
import { Header, Card } from "react-native-elements";
import { iOSUIKit } from "react-native-typography";
import Tag from '../Components/Tag'



class AppointmentInfo extends React.Component {

	state={
		servicesArray :[],
		cartsArray: []
	}

	componentDidMount() {
		fetch(`http://localhost:3000/carts/${this.props.route.params.otherParam.id}`)
			.then((response) => response.json())
			.then(cart=>this.fetchServices(cart.service_id))
	}
	
	fetchServices=(id)=> {
		fetch(`http://localhost:3000/services/${id}`)
		.then((response) => response.json())
		.then((json) => {
			this.setState({ 
				servicesArray: json
			});
		})
	}

 deleteAppointment = () => {
		fetch(`http://localhost:3000/appointments/${this.props.route.params.otherParam.id}`, { method: "DELETE" })
		.then(()=>this.props.navigation.popToTop())
  };

    render(){
			return(
				<View style={{ justifyContent: "center" }}>
				<Image
					 style={ {
						width: 400,
						height: 150,
					}}
					source={{
						uri: this.props.route.params.barberParam.image,
					}}
					/>
				<ScrollView >
				<Card>
					<Text style={iOSUIKit.title3}>{this.props.route.params.barberParam.name}</Text>
					<Text>{this.props.route.params.barberParam.address}</Text>
					<Text>{this.props.route.params.barberParam.phone}</Text>
					<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
					<Tag>
						Date: {this.props.route.params.otherParam.date}</Tag>
						<Tag>
						Time: {this.props.route.params.otherParam.time}</Tag>
					</View>

					<Text style={iOSUIKit.title3}>Service Ordered:</Text>
				<Text style={iOSUIKit.subheadEmphasized}>{this.state.servicesArray.name} ${this.state.servicesArray.price}.00</Text>
					<Text></Text>
					</Card>
					<Button      
					title='Edit this Appointment'
					onPress={this.deleteAppointment}
					/>
					<Button      
					title='Delete Appointment'
					color = 'red'
					onPress={this.deleteAppointment}
					/>
			
			</ScrollView>		
			</View>	
		)
	}
}

export default AppointmentInfo