import React, { PureComponent } from "react";
import { View } from "react-native";
import BannerItem from "../shared/banner-item";

class Banner extends PureComponent {
  render() {
    return (
      <View>
        <BannerItem
          animation={require("../../../assets/png/mosque.png")}
          header={"TIME"}
          name={"md-notifications"}
          size={20}
          color={"white"}
          statusIcon={"Mute"}
          informationTime={"12:40"}
          detailInformationTime={"3 hours left until Ashar"}
        />
      </View>
    );
  }
}

export default Banner;
