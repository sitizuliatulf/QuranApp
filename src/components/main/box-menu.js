import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import BoxItem from "../shared/box-item";
import {
  Mosque,
  Qibla,
  Quran,
  TimeSholat,
  Halal,
  Infaq,
  Comunity,
  Tandain
} from "../../utils/svg";
import MainNavigator from "../../navigations/index";

const DataIcon = [
  {
    icon: Mosque,
    label: "Mosque"
  },
  {
    icon: Qibla,
    label: "Qibla"
  },
  {
    icon: Quran,
    label: "Al-Quran"
  },
  {
    icon: TimeSholat,
    label: "Prayer Time"
  },
  {
    icon: Halal,
    label: "Place"
  },
  {
    icon: Comunity,
    label: "Community"
  },
  {
    icon: Infaq,
    label: "Infaq"
  },
  {
    icon: Tandain,
    label: "Marker"
  }
];

class BoxMenu extends PureComponent {
  constructor() {
    super();
  }

  _renderItem = ({ item: { label, icon, onPress } }) => {
    return (
      <BoxItem
        icon={icon}
        label={label}
        onPress={() => this.props.navigation.navigate("PrayerTime")}
      />
    );
  };

  _keyExtractor = item => item.label;

  render() {
    return (
      <FlatList
        data={DataIcon}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        horizontal={false}
        numColumns={4}
      />
    );
  }
}

export default BoxMenu;
