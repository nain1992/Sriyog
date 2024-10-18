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
    contentwrapper: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: getPercent(5, width),
    },
    labletext: {
      fontFamily: "Regular",
      fontSize: rf(20),
      color: "#000000",
      textAlign: "center",
    },
    membertext: {
      fontFamily: "Regular",
      fontSize: rf(16),
      color: "#000000",
      textAlign: "center",
    },
    homebtnbody: {
      height: getPercent(6, height),
      width: getPercent(35, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#4B4B4B",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      marginRight: 10,
    },
    btntext: {
      fontFamily: "Bold",
      fontSize: rf(17),
      color: "#4B4B4B",
    },
  });
