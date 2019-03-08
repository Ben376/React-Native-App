import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../screens/home/index'; 
import SideMenu from './SideMenu';

import Profile from '../screens/profile/index'; 
import Settings from '../screens/settings/index'; 
import Login from '../screens/login/index'; 

const MainNavigator = createDrawerNavigator({
  LogOut: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Settings: {
    screen: Settings,
  },
}, {
  contentComponent: SideMenu,
  drawerWidth: 250,
});

export default createAppContainer(MainNavigator);
