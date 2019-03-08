// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

class Separator extends Component {

  render() {

		return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  }
}
 
export default (Separator);
