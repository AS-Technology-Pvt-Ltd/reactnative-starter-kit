import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../Home';
export default createStackNavigator(
  {Home: Home},
  {defaultNavigationOptions: {headerShown: false}},
);
