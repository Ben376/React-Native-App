import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../../styles';

class Details extends Component {

  render() {
    return (
      <View style={Styles.detailsContainer}>
        <Text>Details News</Text>
      </View>
    );
  }
}

export default Details;
