import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Styles from '../styles';

class SettingsPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Settings",
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
        <Text>Settings</Text>
        <Icon name="settings" size={48} />
      </View>
    );
  }
}

export default SettingsPage;