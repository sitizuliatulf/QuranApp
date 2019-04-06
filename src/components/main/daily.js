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
          TextDaily={"Amazing! Virtue and greaatness of prayer"}
          backgroundDaily={require("../../../assets/jpg/header-background.jpg")}
        />
      </View>
    );
  }
}

export default Daily;
