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

    pickerbody: {
      height: getPercent(6, height),
      width: getPercent(90, width),
      borderRadius: 5,
      borderBottomWidth: 1,
      borderColor: "#4B4B4B",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10,
    },
    proffessionButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
    },
    pickertext: {
      fontFamily: "Regular",
      fontSize: rf(20),
      color: "#4B4B4B",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
    dropdown: {
      width: getPercent(90, width),
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
      top: getPercent(18, height),
    },
    dropdownItemText: {
      fontFamily: "Regular",
      fontSize: rf(18),
      marginVertical: 5,
      color: "#4B4B4B",
    },
    proffesionswrapper: {
      paddingHorizontal: getPercent(2, height),
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 10,
    },
    itembodywrapper: {
      alignItems: "center",
      marginVertical: 8,
      marginHorizontal: 5,
    },
    imagebody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      overflow: "hidden",
    },
    proffesionname: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#4B4B4B",
      marginTop: 2,
    },
  });
