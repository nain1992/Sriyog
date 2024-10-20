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
    logowrapper: {
      height: getPercent(27, height),
      width: getPercent(27, height),

      alignSelf: "center",
      marginVertical: getPercent(10, height),
    },
    languagepickerbody: {
      height: getPercent(5.5, height),
      width: getPercent(57, width),
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#4B4B4B",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10,
    },
    languageButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
    },
    languagetext: {
      fontFamily: "Regular",
      fontSize: rf(20),
      color: "#4B4B4B",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
    butonandtextwrapper: {
      flex: 1,
      justifyContent: "flex-end",
    },
    innerwrapper: {
      flex: 0.8,
      justifyContent: "space-around",
      paddingTop: getPercent(3, height),
    },
    Sponserwrapper: {
      height: getPercent(10, height),
      width: getPercent(80, width),
      overflow: "hidden",
      alignSelf: "center",
    },
    searchtext: {
      fontFamily: "Regular",
      fontSize: rf(18),
      color: "#4B4B4B",
      textAlign: "center",
    },
    dropdown: {
      width: getPercent(60, width),
      height: getPercent(25, height),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      borderRadius: 10,
      backgroundColor: "#fff",
      padding: 10,
      position: "absolute",
      alignSelf: "center",
      top: getPercent(42, height),
    },
    dropdownItemText: {
      fontFamily: "Regular",
      fontSize: rf(18),
      marginVertical: 5,
      color: "#4B4B4B",
    },
  });
