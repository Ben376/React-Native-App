// @flow

import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../actions';
import Styles from '../../styles';

class FavoritesButton extends Component {
	state = {
		color: false,
	};

	componentWillMount() {
		const { profile, favList } = this.props;
		const favUser = favList.map(user=>user);
		
		for (let index = 0; index < favUser.length; index++) {
			if (favUser[index].username === profile.username) {				
				return this.state.color = true;
			}			
		}
	}

	_changeColor = (profile) => {
		const { color } = this.state;
		const { 
			actionFavoritesList: addFav, 
			actionDeleteFavorites: deleteFav 
		} = this.props.actions;
		
		if (color) {
			deleteFav(profile.username);
			
			this.setState({
				color: false,
			});
		} else {
			addFav(profile);

			this.setState({
				color: true,
			});
		}
	}

  render() {
		const { username, profile } = this.props;
		const { color } = this.state;

    return (
			<View style={Styles.cardHeaderBox}>
				<View style={Styles.cardHeader}>
					<Text style={Styles.cardTitle}> {username} </Text>
				</View>
				<TouchableOpacity style={Styles.cardButton}>
						<Icon
						  onPress={() => this._changeColor(profile)}
							color={color ? 'red' : 'pink'}
							name="favorite" 
							size={25} />
					</TouchableOpacity>
				<View style={Styles.cardSeparator} />
			</View>

    );
  }
}
 
const mapStateToProps = state =>({
  favList: state.reducerFavoritesList.favoritesList,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
  
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FavoritesButton);
