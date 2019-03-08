import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../actions';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import Styles from '../../styles';

class NewsPage extends Component {

  componentDidMount = () => {
  	this.props.actions.actionUsersList();
  }

  static navigationOptions = ({ navigation }) => ({
		title: "NewsPage",
		headerLeft: (
			<TouchableOpacity
			style={Styles.headerButton}
			onPress={() => navigation.openDrawer()}>
				<Icon name="menu" size={20} />
			</TouchableOpacity>
		),
  })
  
  render() {
  	const { usersList } = this.props;    
    const profile = usersList.length > 0 && usersList[2];
    const { 
      avatar, 
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
    <View style={Styles.cardBox}>
      <Text style={Styles.randomTitle}> Random profile </Text>
      <Card
				title={username}
				key={key}>
				<Image style={Styles.cardAvatar} source={{uri: avatar}}/>
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
      </Card>
    </View>
  );
  }
}

const mapStateToProps = state =>({
  usersList: state.reducerUsersList.usersList,
});
  
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
  
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NewsPage);
