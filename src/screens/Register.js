import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import { Button } from "native-base";
import Dashboard from "./Dashboard";
import { Colors } from "react-native/Libraries/NewAppScreen";

function Register(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonSuccess1 text1="Login" style={styles.materialButtonSuccess1}>  </MaterialButtonSuccess1>
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
 
         <Text style={styles.TextStyle,styles.setFb_Text_White}> Register With Facebook </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.10  }>
 
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
