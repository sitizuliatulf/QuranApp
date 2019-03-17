import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
// import BoxMenu from "./src/components/main/box-menu";
// import Banner from "./src/components/main/banner";
// import Home from "./src/pages/home";
// import Daily from "./src/components/main/daily";
// import PrayerTime from "./src/pages/prayer-time";
import App from "./src/navigations";

AppRegistry.registerComponent(appName, () => App);
