import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';


const PlacesListScreen = props => {
const places = useSelector(state => state.places.places);
console.log(places);
return (
  <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={element => {
        console.log(element.item);
       return (<PlaceItem
        onSelect={()=>{
          props.navigation.navigate('PlaceDetail', {placeTitle: element.item.title, placeId: element.item.id})
        }}
        image={null}
        title={element.item.title}
        address={null}
      />);
}
}
/>
);
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Add Place'
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
