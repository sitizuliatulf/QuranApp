import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import BannerItem from "../components/shared/banner-item";

const TimePlayer = [
  {
    header: "subuh",
    informationTime: "04.00",
    statusIcon: "Mute",
    size: 18,
    name: "md-notifications",
    color: "white",
    animation: require("../../assets/png/mosque.png"),
    detailInformationTime: "3 hours left until Ashar"
  },
  {
    header: "dzuhur",
    informationTime: "04.00",
    statusIcon: "Mute",
    size: 18,
    name: "md-notifications",
    color: "white",
    animation: require("../../assets/png/mosque.png"),
    detailInformationTime: "3 hours left until Ashar"
  },
  {
    header: "subuh",
    informationTime: "04.00",
    statusIcon: "Mute",
    size: 18,
    name: "md-notifications",
    color: "white",
    animation: require("../../assets/png/mosque.png"),
    detailInformationTime: "3 hours left until Ashar"
  },
  {
    header: "subuh",
    informationTime: "04.00",
    statusIcon: "Mute",
    size: 18,
    name: "md-notifications",
    color: "white",
    animation: require("../../assets/png/mosque.png"),
    detailInformationTime: "3 hours left until Ashar"
  },
  {
    header: "subuh",
    informationTime: "04.00",
    statusIcon: "Mute",
    size: 18,
    name: "md-notifications",
    color: "white",
    animation: require("../../assets/png/mosque.png"),
    detailInformationTime: "3 hours left until Ashar"
  }
];

class PrayerTime extends PureComponent {
  constructor() {
    super();
  }

  _renderItem = ({
    item: {
      animation,
      header,
      name,
      size,
      color,
      statusIcon,
      informationTime,
      detailInformationTime
    }
  }) => {
    return (
      <BannerItem
        animation={animation}
        header={header}
        name={name}
        size={size}
        color={color}
        statusIcon={statusIcon}
        informationTime={informationTime}
        detailInformationTime={detailInformationTime}
      />
    );
  };

  _keyExtractor = item => item.header;

  render() {
    return (
      <FlatList
        data={TimePlayer}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default PrayerTime;
