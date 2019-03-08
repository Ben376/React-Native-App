import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Styles from '../styles';

class Profile extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Profile",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={20} />
      </TouchableOpacity>
    ),

  })
  render() {
    return (
      <View style={Styles.container}>
        <Text>Profile page</Text>
        <Icon name="person" size={48} />
      </View>
    );
  }
}

export default Profile;
