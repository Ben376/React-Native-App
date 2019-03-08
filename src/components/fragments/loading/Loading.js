// @flow

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class Loading extends Component {

  render() {
		return (
      <View
        style={{
          paddingVertical: 150,
          borderTopWidth: 1,
          borderColor: "#CEDOCE",
        }}>
        <ActivityIndicator animating size={100} />
      </View>
    );
  }
}
 
export default (Loading);
