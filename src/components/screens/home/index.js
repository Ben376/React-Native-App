import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SearchBar from './search';
import NewsPage from './news';
import FavoritesPage from './favorites';

const bottomTabs = createBottomTabNavigator({
  News: {
    screen: NewsPage,
    navigationOptions: {
      title: "News",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="new-releases"
          size={17}
          color={tintColor} />
      )
    }
  },
  Favorites: {
    screen: FavoritesPage,
    navigationOptions: {
      title: "Favorites",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="favorite"
          size={17}
          color={tintColor} />
      )
    }
  },
  Search: {
    screen: SearchBar,
    navigationOptions: {
      title: "Search",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="search"
          size={17}
          color={tintColor} />
      )
    }
  }
});

export default createStackNavigator(
  {bottomTabs}, 
  {headerMode: "none"}
);
