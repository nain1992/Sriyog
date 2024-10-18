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
    submitbtnbody: {
      height: getPercent(7, height),
      width: getPercent(30, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#4B4B4B",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginVertical: getPercent(3, height),
    },
    btntext: {
      fontFamily: "Regular",
      fontSize: rf(18),
      color: "#4B4B4B",
    },
    input: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#000000",
    },
  });
