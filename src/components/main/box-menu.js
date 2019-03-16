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
  Comunity
} from "../../utils/svg";

const DataIcon = [
  {
    icon: Mosque,
    label: "Masjid"
  },
  {
    icon: Qibla,
    label: "Kiblat"
  },
  {
    icon: Quran,
    label: "Al-Quran"
  },
  {
    icon: TimeSholat,
    label: "Waktu Solat"
  },
  {
    icon: Halal,
    label: "Tempat"
  },
  {
    icon: Comunity,
    label: "Komunitas"
  },
  {
    icon: Infaq,
    label: "Infaq"
  },
  {
    icon: Mosque,
    label: "Tempat"
  }
];
class BoxMenu extends PureComponent {
  constructor() {
    super();
  }

  _renderItem = ({ item: { label, icon } }) => {
    return <BoxItem icon={icon} label={label} />;
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
