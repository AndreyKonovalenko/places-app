import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import placesReducer from './scr/store/places-reduxer'


import PlacesNavigator from './src/navigation/PlacesNavigator';

const rootReducer = combineReducers({
  palces: placesReducer

})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
     <PlacesNavigator />
    </Provider>
  );
}
