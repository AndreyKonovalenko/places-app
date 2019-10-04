import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import ENV from '../../config/env';

const apiKey = ENV().googleApiKey;


const MapPreview = props => {
  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${apiKey}`;
  }

  return (
    <TouchableOpacity style={{...styles.mapPreview, ...props.style}} onPress={props.onPressHandler}>
       {props.location ? <Image style={styles.mapImage} source={{uri: imagePreviewUrl}}/>: props.childern}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  mapImage: {
    width: '100%',
    height: '100%'
  }
})


export default MapPreview;
