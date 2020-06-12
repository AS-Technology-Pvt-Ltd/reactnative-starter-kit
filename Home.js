import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
class Home extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.data.name}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {home} = state;
  console.log(home);
  const data = {name: home};
  return {data};
};

export default connect(mapStateToProps)(Home);
