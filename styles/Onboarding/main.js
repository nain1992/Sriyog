import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    imagebody: {
      height: getPercent(25, height),
      width: getPercent(25, height),
      marginTop: getPercent(10, height),
      overflow: "hidden",
      alignSelf: "center",
    },
    namewrapper: {
      flex: 0.6,
      justifyContent: "space-evenly",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    introtext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: "#000000",
      textAlign: "center",
      lineHeight: 22,
    },
    nametext: {
      fontFamily: "Regular",
      fontSize: rf(22),
      color: "#4B4B4B",
      textAlign: "center",
    },
    name: {
      fontFamily: "Regular",
      fontSize: rf(25),
      color: "#4B4B4B",
      textAlign: "center",
    },
    btnwrapper: {
      flex: 0.25,
      justifyContent: "space-around",
      marginBottom: 10,
    },
    skipbtn: {
      fontFamily: "Regular",
      fontSize: rf(20),
      color: "#0C4690",
      textAlign: "center",
    },
  });
