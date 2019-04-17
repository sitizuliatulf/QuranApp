import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import BannerItem from "../components/shared/banner-item";
import axios from "axios";
import { informationTime, trasformPrayerTimesToArr } from "../utils/helper";
import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

class PrayerTime extends PureComponent {
  constructor() {
    super();
    this.state = {
      prayerTimes: []
    };
  }

  // single responbility function
  // ambil permission dari hp
  // kalau misalkan diizinkan gue dapetin longitude latitude dari hardware gue
  // tapi kalau misalkan gak diizinin gue callin gapi get waktu sholat pake longitude dan latitude
  // yg dfault
  // ketika gue gagal dapetin longitude dan latitude maka gue lakuin step diatas
  // kalau misalkan berhasil maka gue calling api pake yang udah

  getPermissionAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    throw new Error();
  };

  getCurrentLocation = () => {
    return new Promise((resolve, rejects) => {
      return Geolocation.getCurrentPosition(
        position => resolve(position),
        _ => rejects()
      );
    });
  };

  getFetchLocation = ({ longitude, latitude }) => {
    return axios.get(`https://time.siswadi.com/pray/${latitude}/${longitude}`);
  };

  async componentDidMount() {
    let response;
    try {
      await this.getPermissionAndroid();
      const position = await this.getCurrentLocation();
      response = await this.getFetchLocation({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      });
      this.setState({
        prayerTimes: trasformPrayerTimesToArr(response.data.data)
      });
    } catch (e) {
      response = this.getFetchLocation({
        latitude: -6.1744651,
        longitude: 106.822745
      });
      this.setState({
        prayerTimes: trasformPrayerTimesToArr(response.data.data)
      });
    }
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
        detailInformationTime={informationTime(item)}
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
