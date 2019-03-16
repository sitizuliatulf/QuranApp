import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import HeaderDaily from "../shared/header-daily";

class Daily extends PureComponent {
  render() {
    return (
      <View>
        <HeaderDaily
          textHeaderDaily={"Featured"}
          buttonTextHeader={"View All"}
          TextBoxHeaderDaily={"Daily Dawah"}
          // backgroundDaily={require("../../../assets/jpg/background-daily.jpg")}
        />
      </View>
    );
  }
}

export default Daily;
