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
    label: "Prayer Time",
    navigationPath: "PrayerTime"
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

  _navigate = navigationPath => () => {
    this.props.navigation.navigate(navigationPath);
  };

  _renderItem = ({ item: { label, navigationPath, icon } }) => {
    return (
      <BoxItem
        icon={icon}
        label={label}
        onPress={this._navigate(navigationPath)}
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
