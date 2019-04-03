import React, { PureComponent } from "react";
import { FlatList, Text, View } from "react-native";
import BannerItem from "../components/shared/banner-item";
import axios from "axios";

// const TimePlayer = [
//   {
//     header: "subuh",
//     informationTime: "04.00",
//     statusIcon: "Mute",
//     size: 18,
//     name: "md-notifications",
//     color: "white",
//     animation: require("../../assets/png/mosque.png"),
//     detailInformationTime: "3 hours left until Ashar"
//   },
//   {
//     header: "dzuhur",
//     informationTime: "04.00",
//     statusIcon: "Mute",
//     size: 18,
//     name: "md-notifications",
//     color: "white",
//     animation: require("../../assets/png/mosque.png"),
//     detailInformationTime: "3 hours left until Ashar"
//   },
//   {
//     header: "subuh",
//     informationTime: "04.00",
//     statusIcon: "Mute",
//     size: 18,
//     name: "md-notifications",
//     color: "white",
//     animation: require("../../assets/png/mosque.png"),
//     detailInformationTime: "3 hours left until Ashar"
//   },
//   {
//     header: "subuh",
//     informationTime: "04.00",
//     statusIcon: "Mute",
//     size: 18,
//     name: "md-notifications",
//     color: "white",
//     animation: require("../../assets/png/mosque.png"),
//     detailInformationTime: "3 hours left until Ashar"
//   },
//   {
//     header: "subuh",
//     informationTime: "04.00",
//     statusIcon: "Mute",
//     size: 18,
//     name: "md-notifications",
//     color: "white",
//     animation: require("../../assets/png/mosque.png"),
//     detailInformationTime: "3 hours left until Ashar"
//   }
// ];

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
        const keyOfTime = response.data.data;
        let tmp = [];
        for (var key in keyOfTime) {
          var valueOfKey = response.data.data[key];
          if (typeof valueOfKey === "string") {
            tmp = tmp.concat({
              name: key,
              time: valueOfKey
            });
          }
        }

        this.setState({ prayerTimes: tmp });
      })
      .catch(error => {
        console.log(error);
      });
  }

  _detailTime = item => {
    let date = new Date();
    let currHour = date.getHours();
    let currMinutes = date.getMinutes();
    let getHourToMinutes = currHour * 60;
    let currTime = getHourToMinutes + currMinutes;

    let timeFromApi = item.time;
    let hourApi = parseInt(timeFromApi.split(":")[0]);
    let minutesApi = parseInt(timeFromApi.split(":")[1]);
    let hourApiToMinutes = hourApi * 60;
    let getTimeFromApi = hourApiToMinutes + minutesApi;

    let resultTime = getTimeFromApi - currTime;
    let minutes = resultTime % 60;
    let hour = (resultTime - minutes) / 60;
    if (currTime < getTimeFromApi) {
      return `Time ${hour} ${minutes} until ${item.name}`;
    }

    return `Waktu sudah melebihi`;
  };

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
        detailInformationTime={this._detailTime(item)}
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
