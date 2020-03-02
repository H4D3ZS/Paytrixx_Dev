import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CupertinoToolbar from "../components/CupertinoToolbar.js";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton.js";
import ProfileScreen from '../screens/Profile'



function Dashboard(navigation) {
  return (

    <NavigationContainer>
    <Stack.Navigator>
    <View style={styles.container}>
      <CupertinoToolbar
        icon1Name="ios-home"

        icon2Name="account"  onPress={ProfileScreen} //ProfileScreen
        
        icon3Name="ios-notifications"
        style={styles.cupertinoToolbar}
      ></CupertinoToolbar>
      <CupertinoHeaderWithActionButton
        text3="Logout"
        text1="Back"
        text2="Paytrixx"
        button2="Login"
        style={styles.cupertinoHeaderWithActionButton}
      ></CupertinoHeaderWithActionButton>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.balance}>Balance:</Text>
          <View style={styles.phpRow}>
            <Text style={styles.php}>Php:</Text>
            <Text style={styles.pts}>pts</Text>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/Top_Up_Icon.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Image
              source={require("../assets/images/Transfer.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../assets/images/Pay.jpg")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
          <View style={styles.topupRow}>
            <Text style={styles.topup}>Topup</Text>
            <Text style={styles.transfer}>Transfer</Text>
            <Text style={styles.pay}>Pay</Text>
          </View>
          <View style={styles.image4Row}>
            <Image
              source={require("../assets/images/Withdraw.jpg")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Image
              source={require("../assets/images/Calendar.jpg")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
          </View>
          <View style={styles.withdrawRow}>
            <Text style={styles.withdraw}>Withdraw</Text>
            <Text style={styles.scheduler}>Scheduler</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect3}></View>
      <View style={styles.rect4}></View>
      <Text style={styles.viewMore}>View More ...</Text>
      <Text style={styles.recentTransactions}>Recent Transactions</Text>
    </View>

    <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0.05)"
  },
  cupertinoToolbar: {
    width: 375,
    height: 44,
    marginTop: 754,
    marginLeft: -6
  },
  cupertinoHeaderWithActionButton: {
    width: 375,
    height: 44,
    marginTop: -765
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 251,
    backgroundColor: "rgba(50,187,46,1)",
    position: "absolute",
    flexDirection: "row"
  },
  balance: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 80
  },
  php: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  pts: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 213
  },
  phpRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 26,
    marginTop: 125
  },
  rect2: {
    top: 143,
    left: 21,
    width: 333,
    height: 212,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  image: {
    width: 61,
    height: 50
  },
  image2: {
    width: 50,
    height: 50,
    marginLeft: 58
  },
  image3: {
    width: 50,
    height: 50,
    marginLeft: 69
  },
  imageRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 23,
    marginRight: 22
  },
  topup: {
    color: "rgba(50,187,46,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  transfer: {
    color: "rgba(50,187,46,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 54
  },
  pay: {
    color: "rgba(50,187,46,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 71
  },
  topupRow: {
    height: 18,
    flexDirection: "row",
    marginLeft: 29,
    marginRight: 33
  },
  image4: {
    width: 50,
    height: 50
  },
  image5: {
    width: 50,
    height: 50,
    marginLeft: 71
  },
  image4Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 29,
    marginRight: 133
  },
  withdraw: {
    color: "rgba(50,187,46,1)",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  scheduler: {
    color: "rgba(50,187,46,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 49
  },
  withdrawRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 16,
    marginRight: 113
  },
  rectStack: {
    width: 375,
    height: 355
  },
  rect3: {
    width: 335,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 170,
    marginLeft: 19
  },
  rect4: {
    width: 335,
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 22,
    marginLeft: 21
  },
  viewMore: {
    color: "rgba(127,127,127,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 29,
    marginLeft: 137
  },
  recentTransactions: {
    color: "rgba(127,127,127,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -175,
    marginLeft: -1
  }
});

export default Dashboard;