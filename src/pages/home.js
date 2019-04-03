import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import BoxMenu from "../components/main/box-menu";
import Banner from "../components/main/banner";
import Daily from "../components/main/daily";
import Dimensions from "Dimensions";

const { height } = Dimensions.get("window");

// const heightLayer = 180;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height
  },
  containerTextDaily: {}
});

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Banner />
        </View>
        <View style={styles.boxMenu}>
          <BoxMenu {...this.props} />
        </View>
        <View style={styles.containerTextDaily}>
          <Daily />
        </View>
      </View>
    );
  }
}

export default Home;