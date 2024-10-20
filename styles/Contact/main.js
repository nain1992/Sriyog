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
    mapview: {
      height: getPercent(30, height),
      // height: 225,
      width: "90%",
      marginVertical: 10,
      alignSelf: "center",
      borderRadius: 10,
      overflow: "hidden",
    },

    contacttext: {
      fontFamily: "Bold",
      fontSize: rf(16),
      color: "#000000",
      paddingLeft: getPercent(5, width),
      marginVertical: 6,
    },
    contactinforwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    iconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    textbody: {
      borderLeftWidth: 1,
      borderColor: "#4B4B4B",
      height: getPercent(7, height),
      marginVertical: 5,
      width: getPercent(75, width),
      paddingLeft: 7,
      marginLeft: 15,
      justifyContent: "center",
    },
    addressinfortext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#4B4B4B",
      lineHeight: 25,
    },
    dropzonewrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      height: getPercent(8, height),
    },

    dropzonebtn: {
      height: getPercent(4.5, height),
      width: getPercent(40, width),
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#4B4B4B",
      justifyContent: "center",
      alignItems: "center",
    },
    btntext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#000000",
    },
    whatsappbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
    },
  });
