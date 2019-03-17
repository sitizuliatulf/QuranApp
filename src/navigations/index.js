import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../pages/home";
import PrayerTime from "../pages/prayer-time";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    PrayerTime: {
      screen: PrayerTime
    }
  },
  {
    initialRouteName: "Home"
  }
);
const App = createAppContainer(MainNavigator);
export default App;
