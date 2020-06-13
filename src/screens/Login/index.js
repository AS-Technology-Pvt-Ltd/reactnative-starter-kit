import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const Login = props => {
  return (
    <View style={styles.container}>
      <Text onPress={() => props.navigation.navigate('Home')}>Login</Text>
    </View>
  );
};

export default Login;
