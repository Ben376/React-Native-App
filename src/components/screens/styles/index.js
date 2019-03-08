import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerButton: {
    height: 44,
    width: 44,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius:30,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  loginText: {
    color: 'white',
  },
  forgotPassword: {
    marginTop: 8,
  },
  errorText: {
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalForm: {
    width: 300,
    height: 200, 
    backgroundColor: '#FCFCFC', 
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalInputBox: {
    marginTop:25,
  },
  modalFooter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  modalButton: {
    marginRight: 5,
  },
  logoIcon:{
    width:100,
    height:100,
    justifyContent: 'center',
    marginBottom: 40,
  },
  randomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  cardMargin: {
    marginBottom: 10,
  },
  cardBox: {
    marginTop: '20%',
  },
  cardAvatar: {
    width:150, 
    height:150, 
    borderRadius: 10, 
    left: 75, 
    marginBottom: 20,
  },
  cardLabel: {
    fontWeight: 'bold',
  },
  cardHeader: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSeparator: {
      height: 1,
      width: '100%',
      backgroundColor: '#CED0CE',
      marginTop: 10,
      marginBottom: 10,
  },
  cardButton: {
    left: '90%',
    position: 'absolute',
  },
  cardHeaderBox: {
    position: 'relative',
  }
});
