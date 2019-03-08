import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../actions';

import Separator from '../../../fragments/separator/Separator';
import Empty from '../../../fragments/empty/Empty';
import Styles from '../../styles';

class FavoritesPage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "FavoritesPage",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={20} />
      </TouchableOpacity>
    ),
  })

  render() {
    const { favList, navigation } = this.props;
    
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
        <FlatList
          data={favList}
          renderItem={({item}) => (
            <ListItem
              key={item.username}
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
         /> 
          {favList.length === 0 ? <Empty /> : null}    
      </List>
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
)(FavoritesPage);