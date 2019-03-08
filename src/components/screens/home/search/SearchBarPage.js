import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../actions';
import { TouchableOpacity, FlatList } from 'react-native';
import { 
  Icon, 
  List, 
  ListItem, 
  SearchBar 
} from 'react-native-elements';
import Styles from '../../styles';
import Loading from '../../../fragments/loading/Loading';
import Separator from '../../../fragments/separator/Separator';

class SearchBarPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "SearchPage",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={20} />
      </TouchableOpacity>
    ),
  });

  componentDidMount = () => {
    this.props.actions.actionUsersList();    
  }

  _filterUsersName = (text) => {
    this.props.actions.actionSearchBar(text);
  }

  _filteredUsersList = () => {
		const { usersList, searchValue } = this.props;  
		  
    const filteredUsersList = usersList && usersList.filter(
      userCell => userCell.username.match(searchValue)            
    );    
    	return filteredUsersList;
  }

	_renderSearchBar = () => {
    return (
      <SearchBar
        placeholder="Enter the name"
        lightTheme
        round
        onChangeText={text => this._filterUsersName(text)}
        autoCorrect={false}
      />
    );
	}

  render() {
    const { navigation, usersList } = this.props;
    
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
        <FlatList
          data={this._filteredUsersList()}
          renderItem={({item}) => (
            <ListItem
              roundAvatar
              onPress={() => navigation.navigate('Details', {profileDetails : item})}
              title={item.username}
              subtitle={item.job}
              avatar={{uri: item.avatar}}
              containerStyle={{borderBottomWidth: 0}}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={this._renderSearchBar}
         /> 
          {usersList.length === 0 ? <Loading /> : null}    
      </List>
    );
  }
}

const mapStateToProps = state =>({
  usersList: state.reducerUsersList.usersList,
  searchValue : state.reducerSearchBar.searchValue,
});
  
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
  
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SearchBarPage);
