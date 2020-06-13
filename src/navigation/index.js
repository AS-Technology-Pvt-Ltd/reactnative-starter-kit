import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoading from '../common/components/AuthLoading';
import PrivateStack from './PrivateStack';
import PublicStack from './PublicStack';
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: PrivateStack,
      Auth: PublicStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
