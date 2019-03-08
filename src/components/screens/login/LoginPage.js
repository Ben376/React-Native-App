import React, { Component } from 'react';
import {
  Text,
  View,
	TextInput,
	Modal,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import Styles from '../styles';
import iconForm from './IconForm';

class LoginPage extends Component {
  state = {
		email   : '',
		sendToEmail: '',
		password: '',
		passwordCheck: '',
		register: false,
		modal: false,
	}

	_handleModal(visible) {
    this.setState({modal: visible});
  }

	_handlePassword = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
	}
	
	_handleSubmit = () => {		
		this.setState({
			register: !this.state.register,
		})
	}

	_renderRegisterForm = () => {
		const { 
			email, 
			password, 
			passwordCheck 
		} = this.state;
		const validity = email && password && passwordCheck;

		return (
			<View style={Styles.loginContainer}>
				<View>
					<Image style={Styles.logoIcon} source={{uri: iconForm.logo}}/>
				</View>
				<View style={Styles.inputContainer}>
					<Image style={Styles.inputIcon} source={{uri: iconForm.email}}/>
					<TextInput style={Styles.inputs}
						placeholder="Email"
						keyboardType="email-address"
						underlineColorAndroid='transparent'
						onChangeText={(email) => this.setState({email})}/>
				</View>
				
				<View style={Styles.inputContainer}>
					<Image style={Styles.inputIcon} source={{uri: iconForm.password}}/>
					<TextInput style={Styles.inputs}
						placeholder="Password"
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(password) => this.setState({password})}/>
				</View>

				<View style={Styles.inputContainer}>
					<Image style={Styles.inputIcon} source={{uri: iconForm.password}}/>
					<TextInput style={Styles.inputs}
						placeholder="Password Check"
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(passwordCheck) => this.setState({passwordCheck})}/>
				</View>

				<Button 
					title='Register' 
					disabled={!validity}
					onPress={() => this.props.navigation.navigate("Home")} />

				<TouchableHighlight 
					style={Styles.forgotPassword} 
					onPress={() => this._handleSubmit()}>
					<Text>Login</Text>
				</TouchableHighlight>
		</View>
		);			
	}

	_renderLoginForm = () => {
		const { email, password, sendToEmail } = this.state;
		const validity = email && password;
		const validityModal = sendToEmail;

		return (
			<View style={Styles.loginContainer}>
				<View>
					<Image style={Styles.logoIcon} source={{uri: iconForm.logo}}/>
				</View>
				<View style={Styles.inputContainer}>
					<Image style={Styles.inputIcon} source={{uri: iconForm.email}}/>
					<TextInput style={Styles.inputs}
						placeholder="Email"
						keyboardType="email-address"
						underlineColorAndroid='transparent'
						onChangeText={(email) => this.setState({email})}/>
				</View>
				
				<View style={Styles.inputContainer}>
					<Image style={Styles.inputIcon} source={{uri: iconForm.password}}/>
					<TextInput style={Styles.inputs}
						placeholder="Password"
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(password) => this.setState({password})}/>
				</View>

				<Modal
          animationType="fade"
					transparent={false}
          visible={this.state.modal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modalForm}>
              <Text style={Styles.modalTitle}>Request a new password</Text>

							<View style={Styles.modalInputBox}>
								<View style={Styles.inputContainer}>
									<Image style={Styles.inputIcon} source={{uri: iconForm.email}}/>
									<TextInput style={Styles.inputs}
										placeholder="Email"
										keyboardType="email-address"
										underlineColorAndroid='transparent'
										onChangeText={(sendToEmail) => this.setState({sendToEmail})}/>
								</View>
							</View>

							<View style={Styles.modalFooter}>
								<View style={Styles.modalButton}>
									<Button 
											title='Send' 
											disabled={!validityModal}
											onPress={() => this._handleModal(!this.state.modal)} />
								</View>
								<View style={Styles.modalButton}>
									<Button 
										title='Cancel' 
										onPress={() => this._handleModal(!this.state.modal)} />
								</View>
							</View>

            </View>
          </View>
        </Modal>

				<Button 
					title='Login' 
					disabled={!validity}
					onPress={() => this.props.navigation.navigate("Home")} />

				<TouchableHighlight 
					style={Styles.forgotPassword} 
					onPress={() => {
            this._handleModal(true);
          }}>
					<Text>Forgot your password?</Text>
				</TouchableHighlight>

				<TouchableHighlight 
					style={Styles.forgotPassword} 
					onPress={() => this._handleSubmit()}>
					<Text>Register</Text>
				</TouchableHighlight>
		</View>
		);			
	}

  render() {
		const { register } = this.state;

		return (
			register ? this._renderRegisterForm() : this._renderLoginForm()
		)
  }
}

export default LoginPage;
