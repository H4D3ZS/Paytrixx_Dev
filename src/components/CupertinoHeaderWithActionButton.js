import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithActionButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon name="ios-arrow-back" style={styles.leftIcon2}></Icon>
          <Text style={styles.leftText}>{props.text1 || "Back"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {props.text2 || "Title"}
        </Text>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          style={styles.rightIconButton}
        >
          <Text style={styles.rightText}>{props.text3 || "Action"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon2: {
    color: "#007AFF",
    fontSize: 32
  },
  leftText: {
    color: "#007AFF",
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 17
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 17,
    fontFamily: "roboto-regular",
    lineHeight: 17
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  rightIconButton: {},
  rightText: {
    color: "#007AFF",
    alignSelf: "center",
    fontSize: 17
  }
});

export default CupertinoHeaderWithActionButton;
