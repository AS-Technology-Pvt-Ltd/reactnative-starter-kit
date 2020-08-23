import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MasterLayout from '../../common/components/MasterLayout';
const Login = props => {
  return (
    <MasterLayout>
      <View style={styles.container}>
        <Text onPress={() => props.navigation.navigate('Home')}>Login</Text>
      </View>
      <View style={styles.container}>
        <Text onPress={() => props.navigation.navigate('Home')}>Login</Text>
      </View>
    </MasterLayout>
  );
};

export default Login;
