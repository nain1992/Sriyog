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
    msgtext: {
      paddingLeft: getPercent(5, width),
      marginVertical: getPercent(2, height),
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "rgba(75, 75, 75, 0.7)",
    },
    messagetypebody: {
      height: getPercent(20, height),
      width: getPercent(90, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#4B4B4B",
      marginVertical: 5,
      alignSelf: "center",
      padding: 10,
    },
    Joinbtnbody: {
      height: getPercent(7, height),
      width: getPercent(33, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#4B4B4B",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginVertical: getPercent(3, height),
    },
    btntext: {
      fontFamily: "Bold",
      fontSize: rf(18),
      color: "#4B4B4B",
    },
    termswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(8, height),
    },
    boxbody: {
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 5,
      borderWidth: 1,
    },
    termstext: {
      fontFamily: "Bold",
      fontSize: rf(15),
      color: "#4B4B4B",
    },
  });
