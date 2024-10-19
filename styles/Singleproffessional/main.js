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
    paymentmethodlogowrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      marginVertical: getPercent(2, height),
    },
    iconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
    },
    logobody: {
      height: getPercent(10, height),
      width: getPercent(30, width),
      overflow: "hidden",
    },
    userimagebody: {
      height: getPercent(25, height),
      width: getPercent(25, height),
      overflow: "hidden",
      borderRadius: 100,
      alignSelf: "center",
      marginVertical: getPercent(2, height),
    },
    userinfowrapper: {
      justifyContent: "space-around",
      height: getPercent(22, height),
      alignItems: "center",
    },
    nametext: {
      fontFamily: "Bold",
      fontSize: rf(18),
      color: "#4B4B4B",
    },
    numtext: {
      fontFamily: "SemiBold",
      fontSize: rf(16),
      color: "#4B4B4B",
    },
    protext: {
      fontFamily: "SemiBold",
      fontSize: rf(16),
      color: "#4B4B4B",
    },
    locatext: {
      fontFamily: "SemiBold",
      fontSize: rf(18),
      color: "#4B4B4B",
    },
    backiconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    booknowbtnbody: {
      height: getPercent(6, height),
      width: getPercent(40, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#4B4B4B",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    btntext: {
      fontFamily: "Bold",
      fontSize: rf(16),
      color: "#4B4B4B",
    },
  });
