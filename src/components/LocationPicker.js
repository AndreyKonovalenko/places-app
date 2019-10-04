import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors'
import MapPreview from './MapPreview';


const LocationPicker = props => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLoactoin, setPickedLoaction] = useState();

  const verifyPermissions = async() => {
    const result = await Permissions.askAsync(
      Permissions.LOCATION,
    );
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grand location permissions to use this app.', [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const getLoactionHandler = async() => {
    const hasPremission = await verifyPermissions();
    if (!hasOwnProperty) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
      console.log(location);
      setPickedLoaction({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    }
    catch (err) {
      Alert.alert('Could not fetch location!', 'Please try again later or pick a location on the map', [{ title: 'Okay' }]);
    }
    setIsFetching(false);
  };

  return (<View style={styles.locationPicker}>
     {isFetching ? <ActivityIndicator size='large'color={Colors.primary}/> :
     <MapPreview style={styles.mapPreview} location={pickedLoactoin} >
     <Text>No location chosen yet!</Text>
    </MapPreview>}
    <Button title='Get User Location' color={Colors.primary} onPress={getLoactionHandler}/>
  </View>);

};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1
  }
});

export default LocationPicker;
