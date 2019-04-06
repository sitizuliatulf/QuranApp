import React, { PureComponent } from "react";
import { FlatList, Text, View } from "react-native";
import BannerItem from "../components/shared/banner-item";
import axios from "axios";
import { DetailTime } from "../utils/helper";

class PrayerTime extends PureComponent {
  constructor() {
    super();
    this.state = {
      prayerTimes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://time.siswadi.com/pray/-6.1744651000/106.8227450000")
      .then(response => {
        // const keyOfTime = response.data.data;
        // let tmp = [];
        // for (var key in keyOfTime) {
        //   var valueOfKey = response.data.data[key];
        //   if (typeof valueOfKey === "string") {
        //     tmp = tmp.concat({
        //       name: key,
        //       time: valueOfKey
        //     });
        //   }
        // }
        const keyOfTime = response.data.data;
        let tmp = [];
        var key = Object.keys(keyOfTime);
        for (let i = 0; i < key.length; i++) {
          if (
            key[i] == "Fajr" ||
            key[i] == "Dhuhr" ||
            key[i] == "Asr" ||
            key[i] == "Maghrib" ||
            key[i] == "Isha"
          ) {
            tmp = tmp.concat({
              name: key[i],
              time: response.data.data[key[i]]
            });
          }
        }
        this.setState({ prayerTimes: tmp });
      })
      .catch(error => {
        console.log(error);
      });
  }

  _renderItem = ({ item }) => {
    return (
      <BannerItem
        animation={require("../../assets/png/mosque.png")}
        header={item.name}
        name={"md-notifications"}
        size={18}
        color={"white"}
        statusIcon={"Mute"}
        informationTime={item.time}
        detailInformationTime={DetailTime(item)}
      />
    );
  };

  _keyExtractor = item => item.header;

  render() {
    return (
      <FlatList
        data={this.state.prayerTimes}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default PrayerTime;
