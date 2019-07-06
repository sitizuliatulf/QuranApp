import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import BoxMenu from "../components/main/box-menu";
import Daily from "../components/main/daily";
import Dimensions from "Dimensions";
import BannerItem from "../components/shared/banner-item";
import axios from "axios";
import { prayerTimes, informationTime } from "../utils/helper";
import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

const { height } = Dimensions.get("window");

// const heightLayer = 180;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height
  }
});

class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      times: {
        name: "",
        time: ""
      }
    };
  }

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
      const data = prayerTimes(response.data.data);
      this.setState({
        times: data
      });
    } catch (e) {
      console.log(e);
      response = this.getFetchLocation({
        latitude: -6.1744651,
        longitude: 106.822745
      });
      this.setState({
        times: prayerTimes(response.data.data)
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <BannerItem
            animation={require("../../assets/png/mosque.png")}
            header={this.state.times.name}
            name={"md-notifications"}
            size={18}
            color={"white"}
            statusIcon={"Mute"}
            informationTime={this.state.times.time}
            detailInformationTime={informationTime(this.state.times)}
          />
        </View>
        <View style={styles.boxMenu}>
          <BoxMenu navigation={this.props.navigation} />
        </View>
        <View style={styles.containerTextDaily}>
          <Daily />
        </View>
      </View>
    );
  }
}

export default Home;
