import * as React from 'react';
import { Text, View, requireNativeComponent, StyleSheet, Button, Alert } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation'
// import { PERMISSIONS } from 'react-native-permissions';
// import * as Permissions from 'expo-permissions';



class BarbersScreen extends React.Component {
   
    // requestLocationPermission = async () => {
    //     const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    //     if (status === 'granted') {
    //         return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    //     } else {
    //         throw new Error('Location permission not granted');
    //     }
    // }

    // locateCurrentPosition = () => {
    //     Geolocation.getCurrentPosition(
    //         position => {
    //             console.log(JSON.stringify(position))
    //         }
    //     )
    // }

    render(){
        return (
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                latitude: 40.736527,
                longitude: -73.920816,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}> 
                <Marker
                    coordinate={{
                        latitude: 40.7396,
                        longitude: -73.9193
                    }}>
                        <Callout>
                        <Button
                            title="Blades Brothers Barber Shop"
                            accessibilityLabel="Learn more about this purple button"
                            onPress={() => Alert.alert('Simple Button pressed')}/>
                        </Callout>
                </Marker>  
            </MapView>
            
        );
  }
  
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})

export default BarbersScreen