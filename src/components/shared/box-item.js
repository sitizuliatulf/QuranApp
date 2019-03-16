import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Dimensions from "Dimensions";

const { width } = Dimensions.get("window");

// Container only
const HEIGHT_CONTAINER = 75;
const WIDTH_CONTAINER = width * 0.2;

// Box only
const HEIGHT_BOX = HEIGHT_CONTAINER * 0.7;
const WIDTH_BOX = WIDTH_CONTAINER * 0.7;

// Icon only
const WIDTH_ICON = WIDTH_BOX * 0.7;
const HEIGHT_ICON = HEIGHT_BOX * 0.7;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT_CONTAINER,
    width: WIDTH_CONTAINER,
    marginVertical: 10,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  box: {
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 3,
    marginBottom: 4,
    height: HEIGHT_BOX,
    width: WIDTH_BOX,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 100,
    height: 100
  },
  label: {
    fontSize: 11,
    fontFamily: "Montserrat-Regular"
  }
});

const BoxItem = ({ label, icon: Icon }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.box}>
          <Icon width={WIDTH_ICON} height={HEIGHT_ICON} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BoxItem;
