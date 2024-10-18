import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding/Onboarding";
import Cityselection from "../screens/Cityselection/Cityselection";
import Onboarding2 from "../screens/Onboarding/Onboarding2";
import Onboarding3 from "../screens/Onboarding/Onboarding3";
import Onboarding4 from "../screens/Onboarding/Onboarding4";
import Home from "../screens/Home/Home";
import Helpsubmitsuccess from "../screens/Helpsubmitsuccess/Helpsubmitsuccess";
import Proffessionscreen from "../screens/Proffessionscreen/Proffessionscreen";
import Posttask from "../screens/Posttask/Posttask";
import Postsubmitsuccess from "../screens/Postsubmitsuccess/Postsubmitsuccess";
import Search from "../screens/Search/Search";
import Singleproffessional from "../screens/Singleproffessional/Singleproffessional";
import Proffessionalqr from "../screens/Proffessionalqr/Proffessionalqr";
import Contact from "../screens/Contact/Contact";
import Becomedropzone from "../screens/Becomedropzone/Becomedropzone";
import Dropzonesuccess from "../screens/Dropzonesuccess/Dropzonesuccess";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Cityselection" component={Cityselection} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="Onboarding2" component={Onboarding2} />
      <Screen name="Onboarding3" component={Onboarding3} />
      <Screen name="Onboarding4" component={Onboarding4} />
      <Screen name="Home" component={Home} />
      <Screen name="Helpsubmitsuccess" component={Helpsubmitsuccess} />
      <Screen name="Proffessionscreen" component={Proffessionscreen} />
      <Screen name="Posttask" component={Posttask} />
      <Screen name="Postsubmitsuccess" component={Postsubmitsuccess} />
      <Screen name="Search" component={Search} />
      <Screen name="Singleproffessional" component={Singleproffessional} />
      <Screen name="Proffessionalqr" component={Proffessionalqr} />
      <Screen name="Contact" component={Contact} />
      <Screen name="Becomedropzone" component={Becomedropzone} />
      <Screen name="Dropzonesuccess" component={Dropzonesuccess} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
