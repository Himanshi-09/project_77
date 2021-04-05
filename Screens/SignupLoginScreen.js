import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert ,TouchableOpacity } from 'react-native';

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }
    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert('Successfullt Login')
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = erroe.message;
            return Alert.alert(errorMessage)
        })
    }
    userSignUp = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User Added Successfully')
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = erroe.message;
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View style ={styles.container}>
             <View style = {styles.profileContainer}>
                 <Text style ={styles.title}> Barter System </Text>
             </View>
             <View>
                 <TextInput style = {styles.loginBox}
                  placeholder = 'abc@example.com'
                  keyboardType = 'email.address'
                  onChangeText = {(text)=>{this.setState({
                      emailId:text
                  })}}>
                  </TextInput>
                  <TextInput style = {styles.loginBox}
                  placeholder = 'Enter password'
                  secureTextEntry = {true}
                  onChangeText = {(text)=>{this.setState({
                      password:text
                  })}}>
                  </TextInput>
             </View>
             <View>
              <TouchableOpacity styles = {styles.button}
              onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}>
                <Text style ={styles.buttontext}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity styles = {styles.button}
              onPress = {()=>{this.userLogin(this.state.emailId,this.state.password)}}>
                <Text style ={styles.buttontext}>Login</Text>
              </TouchableOpacity>
             </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor :'#f8beb5',
    },
    loginBox:{
      width :300,
      height:40,
      borderBottomWidth:1.5,
      borderColor :'#ff8a65',
      fontSize:20,
      margin:10,
      paddingLeft:10,
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:65,
        fontWeight:300,
        paddingBottom:30,
        color:"#ff3d00",
    },
    button:{
        width:150,
        height:40,
        backgroundColor:'lightpink',
        margin:10,
        paddingLeft:10
    },
    buttontext:{
        textAlign:'center',
        fontSize:22,
    }
})