import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    professionbody: {
      alignItems: "center",
    },
    iconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
    },
    imagebody: {
      height: getPercent(8, height),
      width: getPercent(8, height),
      overflow: "hidden",
      borderRadius: 100,
    },
    proffesiontitle: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#4B4B4B",
      marginTop: 8,
    },
  });
