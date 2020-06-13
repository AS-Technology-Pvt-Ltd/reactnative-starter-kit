import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import store from './src/redux';
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
