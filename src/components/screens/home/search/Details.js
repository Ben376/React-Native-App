// @flow

import React, { Component } from 'react';
import { Text, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import FavoritesButton from './FavoritesButton';

import Styles from '../../styles';

class Profile extends Component {

  render() {
    const { navigation } = this.props;
    const profile = navigation.getParam('profileDetails');
    const { 
      avatar, 
      bio, 
      company, 
      email, 
      job, 
      key, 
      phone,
      username, 
    } = profile;
    const margin = Styles.marginBottom; 
    const label = Styles.cardLabel;

    return (
      <ScrollView>
        <Card
          key={key}>
						<FavoritesButton username={username} profile={profile} />
            <Image 
              style={Styles.cardAvatar} 
              source={{uri: avatar}}/>
            <Text style={margin}>
              <Text style={label}> Job: </Text> {job}
            </Text>
            <Text style={margin}>
              <Text style={label}> Company: </Text> {company}
            </Text>
            <Text style={margin}>
              <Text style={label}> Email: </Text> {email}
            </Text>
            <Text style={margin}>
              <Text style={label}> Phone: </Text> {phone}
            </Text>
            <Text style={margin}>
              <Text style={label}> Biography: </Text> {bio}
            </Text>
          </Card>
        </ScrollView>
    );
  }
}
 
export default (Profile);
