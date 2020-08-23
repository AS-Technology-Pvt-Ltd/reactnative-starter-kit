import React from 'react';
import {View, SafeAreaView, StatusBar, Platform} from 'react-native';
import layout from '../../../core/constants/layout';
import styles from './styles';
const isIOS = Platform.OS === 'ios';
const Wrapper = isIOS ? SafeAreaView : View;
const MasterLayout = props => {
  const {statusBarColor} = props;
  let defaultStatusBar = isIOS
    ? {backgroundColor: layout.STATUS_BAR}
    : layout.STATUS_BAR;
  return (
    <>
      {isIOS && <SafeAreaView style={[defaultStatusBar, statusBarColor]} />}
      {!isIOS && (
        <StatusBar backgroundColor={defaultStatusBar || statusBarColor} />
      )}
      <Wrapper style={styles.wrapper}>{props.children}</Wrapper>
    </>
  );
};

export default MasterLayout;
