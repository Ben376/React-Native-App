import React, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Styles from './SideMenu.styles';

class SideMenu extends Component {

  render () {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <View>
            <Text style={Styles.sectionHeadingStyle}>
              Main Tab
            </Text>
            <View style={Styles.navSectionStyle}>
							<Icon 
								name="home" 
								size={17} />
							<Text 
								style={Styles.navItemStyle} 
								onPress={() => this.props.navigation.navigate('Home')}>
              		Home
              </Text>
            </View>
          </View>
          <View>
            <Text style={Styles.sectionHeadingStyle}>
              Second Tab
            </Text>
            <View style={Styles.navSectionStyle}>
							<Icon 
								name="person" 
								size={17} />
							<Text 
								style={Styles.navItemStyle} 
								onPress={() => this.props.navigation.navigate('Profile')}>
									Profile
							</Text>
            </View>
						<View style={Styles.navSectionStyle}>
							<Icon 
								name="settings" 
								size={17} />
							<Text 
								style={Styles.navItemStyle} 
								onPress={() => this.props.navigation.navigate('Settings')}>
									Settings
							</Text>
            </View>
          </View>
        </ScrollView>
				<View style={Styles.footerContainer}>
					<Icon 
						name="eject" 
						onPress={() => this.props.navigation.navigate('LogOut')}
						size={17} />
        </View>
      </View>
    );
  }
}

export default SideMenu;
