import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-map';

const MapScreen = props => {
  const mapRegion = {
    latitude: 37.78,
    longitude: 122.43,
    letitudeDelta: 0.0922,
    longitudeDelta: 0.9421
  }

  return (
    <MapView region={mapRegion}/>
  );
};
const styles = StyleSheet.create({});

export default MapScreen;
