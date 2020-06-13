import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
export default createStackNavigator(
  {Login: Login},
  {defaultNavigationOptions: {headerShown: false}},
);
