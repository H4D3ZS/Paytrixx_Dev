import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import { Button } from "native-base";
import Dashboard from "./Dashboard";
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton.js";



export async function facebookLogin() {
  try {
    const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      // handle this however suites the flow of your app
      throw new Error('User cancelled request'); 
    }

    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

    // get the access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      // handle this however suites the flow of your app
      throw new Error('Something went wrong obtaining the users access token');
    }

    // create a new firebase credential with the token
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

    // login with credential
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

    console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
  } catch (e) {
    console.error(e);
  }


}


export async function googleLogin() {
  try {
    // add any configuration settings here:
    await GoogleSignin.configure();

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

    console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
  } catch (e) {
    console.error(e);
  }
}


function Register(props) {
  return (
    <View style={styles.container}>

<CupertinoHeaderWithActionButton
        text3="Help"
        text1=""
        text2="Home"
        button2="Login"
        style={styles.cupertinoHeaderWithActionButton1}
      ></CupertinoHeaderWithActionButton>
       
      <MaterialButtonSuccess1
      //Login Button onClick if Account Exist, Redirected to Dashboard/ No Logic 
      onPress={(Dashboard)}
      text1="Login"
      style={styles.materialButtonSuccess1}>  </MaterialButtonSuccess1>
      <Image
        source={require("../../src/assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image1}>
          </Image> 
      


          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.10}>


          <Image 
          source={require('./../assets/social_login_img/fb_login.png')} 
          style={styles.ImageIconStyle} 
          />
 
         <View style={styles.SeparatorLine} />
 
        
         <Text 
         ////Facebook SocialLogin Button, Register on Click, No Logic

         onPress={(facebookLogin)}
         /////
         style={styles.TextStyle,styles.setFb_Text_White}
         > Register With Facebook </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            // Google Button Login Function
            onPress={(googleLogin)}
            //////
            
            
            style={styles.GooglePlusStyle} activeOpacity={0.10  }>
 
         <Image 
          source={require('./../assets/social_login_img/google_login.png')} 
          style={styles.ImageIconStyle} 
          />
 
         <View style={styles.SeparatorLine} />
 
         <Text style={styles.TextStyle,styles.Google}> Register With Google</Text>
 
       </TouchableOpacity>
      
    </View>
  );


  <Button MaterialButtonSuccess1 onPress={this.Dashboard}></Button>

 

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonSuccess1 : {
    width: 100,
    height: 36,
    // marginTop: 639,
    borderRadius:480,
    marginTop: 550,

    alignSelf: "center"
  },
  image1: {
    width: 260,
    height: 300,
    marginTop: -643,
    alignSelf: "center"
  },

  FacebookStyle: {
    
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: .5,
    borderColor: '#fff',
    height: 45,
    width: 250,
    borderRadius: 180 ,
    margin: 5,
    alignSelf: "center",
    
    
  },

 
  Google:{
 color: "#fff"
  },

  setFb_Text_White:{
    color: "#fff"
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 25,
   // resizeMode : 'stretch',
  
 },

 GooglePlusStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  //  backgroundColor: '#dc4e41',
  backgroundColor: "#A9A9A9",
  borderWidth: .5,
  borderColor: '#fff',
  height: 45,
  width: 250,
  borderRadius: 120 ,
  margin: 5,
  alignSelf:"center",


},


 SeparatorLine :{
 
  backgroundColor : '#fff',
  width: 1,
  height: 40
   
  }
  
});

export default Register;
