import React from 'react';

import {View, Text} from 'react-native';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import Home from './Home';

const home = () => {
  let data = 'sachin';

  return data;
};
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const rootReducer = combineReducers({home: home});
const store = createStore(rootReducer, composeEnhancers());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Home />
        </View>
      </Provider>
    );
  }
}

export default App;
