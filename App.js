import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import placesReducer from './src/store/places-reducer';
import { init } from '/src/helpers/db';



init().then(() => {
  console.log('Initialized database');
}).catch(err => {
  console.log('Initialalizing db failed');
  console.log(err);
});

import PlacesNavigator from './src/navigation/PlacesNavigator';

const rootReducer = combineReducers({
  places: placesReducer

})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
     <PlacesNavigator />
    </Provider>
  );
}
