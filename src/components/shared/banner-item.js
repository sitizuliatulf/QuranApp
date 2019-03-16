import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import Dimensions from "Dimensions";
import Icon from "react-native-vector-icons/Ionicons";

//width
const lessOfWidth = 20;
const { width } = Dimensions.get("window");
const WIDTH_BANNER = width - lessOfWidth; //160
const WIDTH_LAYER = WIDTH_BANNER - lessOfWidth; //140
const WIDTH_HEADER = WIDTH_LAYER - lessOfWidth; //120

//height
const lessOfHeight = 20;
const addOfHeight = 8;
const HEIGHT_CONTAINER = 170;
const HEIGHT_BANNER = HEIGHT_CONTAINER - lessOfHeight; //130
const HEIGHT_LAYER = HEIGHT_BANNER + addOfHeight; //140
const HEIGHT_HEADER = HEIGHT_LAYER + addOfHeight; //150

//icon
const layerIcon = 35;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT_CONTAINER,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    alignItems: "center",
    zIndex: 1,
    marginVertical: 10
  },
  banner: {
    height: HEIGHT_BANNER,
    width: WIDTH_BANNER,
    backgroundColor: "#5ec486",
    borderRadius: 10,
    position: "absolute",
    elevation: 2,
    shadowColor: "black",
    overflow: "hidden"
  },
  middleBanner: {
    height: HEIGHT_LAYER,
    width: WIDTH_LAYER,
    backgroundColor: "#71c694",
    position: "absolute",
    borderRadius: 10,
    elevation: 2,
    opacity: 0.5
  },
  layerContainer: {
    backgroundColor: "#d3e8d7",
    height: HEIGHT_HEADER,
    width: WIDTH_HEADER,
    borderRadius: 10,
    position: "absolute",
    elevation: 2
  },
  ImageBackground: {
    height: HEIGHT_BANNER,
    width: WIDTH_BANNER,
    borderRadius: 15
  },
  containerTextHeader: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
    margin: 5
  },
  textHeader: {
    color: "white",
    fontFamily: "Montserrat-Regular"
  },
  informationTime: {
    color: "white",
    fontSize: 23,
    fontFamily: "Montserrat-Regular",
    fontWeight: "bold"
  },
  statusIcon: {
    color: "white",
    fontSize: 13,
    fontFamily: "Montserrat-Regular"
  },
  boxIconHeader: {
    height: layerIcon,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
    margin: 10
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const BannerItem = ({
  animation,
  header,
  name,
  size,
  color,
  statusIcon,
  informationTime,
  detailInformationTime
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.layerContainer} />
      <View style={styles.middleBanner} />
      <View style={styles.banner}>
        <ImageBackground
          style={styles.ImageBackground}
          source={animation}
          resizeMode="stretch"
        >
          <View style={styles.containerIcon}>
            <View style={styles.boxIconHeader}>
              <TouchableOpacity>
                <Icon
                  name={name}
                  size={size}
                  color={color}
                  style={{ padding: 10 }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.statusIcon}>{statusIcon}</Text>
          </View>
          <View style={styles.containerTextHeader}>
            <Text style={styles.textHeader}>{header}</Text>
            <Text style={styles.informationTime}>{informationTime}</Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              {detailInformationTime}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default BannerItem;
