import { createStackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';

const LoginPageNav = createStackNavigator({
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      header: null,
    }
  },
});

export default LoginPageNav;
