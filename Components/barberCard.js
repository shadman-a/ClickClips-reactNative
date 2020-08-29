import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';




export default class BarberCard extends React.Component {
 
    state={
        date: null,
        time: null
    }
 
    timePicker = () =>{
        if( this.state.date !==null){
            return(
                <DateTimePicker
             value= "2016-06-02T12:53:14.924Z"
             mode="time"
             is24Hour= "false"
             display="default"
             onChange={this.time()}
            
             />
            )
        }
    }

    time = (e) => {
        console.log(e)
    }

    submitButton = () => {
        if( this.state.time !==null){
            return(
                <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Book Now'>
            </Button>

             
            )
        }
    }
 
    render(){
     console.log(this.state)
     return(
         <>
          <Calendar
            minDate={Date()}
            onDayPress={(day) => {this.setState({
               date: day.dateString})
            }}
            />
            {this.timePicker()}
            {this.submitButton()}


         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Text>{this.props.route.params.otherParam.name}</Text>
             <Text>{this.props.route.params.otherParam.id}</Text>
        <Text>{this.state.date}</Text>
         </View>
         </>
     )
 }
}
