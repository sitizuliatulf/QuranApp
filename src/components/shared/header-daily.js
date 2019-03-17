import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Dimensions from "Dimensions";

const { height, width } = Dimensions.get("window");
const HEIGHT_TEXT_BOX = 30;
const WIDTH_TEXT_BOX = width - 230;
const styles = StyleSheet.create({
  container: {
    height: height,
    paddingHorizontal: 8
  },
  box: {
    borderRadius: 15,
    height: 140,
    backgroundColor: "#5ec486",
    overflow: "hidden"
  },
  containerHeader: {
    height: 30,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textHeader: {
    fontSize: 18,
    color: "#37383a"
  },
  buttonTextHeader: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: "#467199"
  },
  containerBoxHeader: {
    padding: 8,
    margin: 8
  },
  boxHeaderDaily: {
    height: HEIGHT_TEXT_BOX,
    width: WIDTH_TEXT_BOX,
    borderRadius: 20,
    justifyContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: "white"
  },
  TextBoxHeaderDaily: {
    color: "#16593c",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    fontWeight: "bold",
    overflow: "hidden"
  }
});
const HeaderDaily = ({
  textHeaderDaily,
  buttonTextHeader,
  TextBoxHeaderDaily,
  backgroundDaily,
  TextDaily
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>{textHeaderDaily}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonTextHeader}>{buttonTextHeader}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <ImageBackground
          source={backgroundDaily}
          style={{ height: height }}
          resizeMode="stretch"
        >
          <View style={styles.containerBoxHeader}>
            <View style={styles.boxHeaderDaily}>
              <Text style={styles.TextBoxHeaderDaily}>
                {TextBoxHeaderDaily}
              </Text>
            </View>
            <Text style={styles.TextBoxHeaderDaily}>{TextDaily}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HeaderDaily;
