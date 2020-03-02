import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import CupertinoToolbar from "../components/CupertinoToolbar";


function Index(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.name}>Name:</Text>
      <Text style={styles.birthdate}>Birthdate:</Text>
      <Text style={styles.address}>Address:</Text>
      <Text style={styles.membership}>Membership:</Text>
      <Text style={styles.mobileNumber}>Mobile Number:</Text>
      <CupertinoHeaderWithActionButton
        text3="Upgrade"
        text1="Back"
        text2="Profile"
        button2="Login"
        style={styles.cupertinoHeaderWithActionButton1}
      ></CupertinoHeaderWithActionButton>
      <CupertinoToolbar
        icon1Name="ios-home"
        icon2Name="account"
        icon3Name="ios-notifications"
        style={styles.cupertinoToolbar1}
      ></CupertinoToolbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 381,
    height: 760
  },
  loremIpsum: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 59,
    marginLeft: 127
  },
  name: {
    color: "rgba(50,187,46,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 46,
    marginLeft: 27
  },
  birthdate: {
    color: "rgba(50,187,46,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 27,
    marginLeft: 26
  },
  address: {
    color: "rgba(50,187,46,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 60,
    marginLeft: 26
  },
  membership: {
    color: "rgba(50,187,46,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 26
  },
  mobileNumber: {
    color: "rgba(50,187,46,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -90,
    marginLeft: 26
  },
  cupertinoHeaderWithActionButton1: {
    width: 375,
    height: 44,
    marginTop: -217,
    marginLeft: 6
  },
  cupertinoToolbar1: {
    width: 375,
    height: 44,
    marginTop: 672
  }
});

export default Index;
