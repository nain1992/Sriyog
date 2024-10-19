import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//bottommenu Styles starts here
export const Bottomtabmenustyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(10, height),
      width: getPercent(100, width),
      backgroundColor: "#EEEEEE",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      position: "absolute",
      bottom: 0,
    },
    iconwrapper: {
      alignItems: "center",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    icontitlename: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#4B4B4B",
      marginTop: 5,
    },
  });

export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),
      width: getPercent(45, width),
      backgroundColor: "#0C4690",
      alignSelf: "center",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      fontSize: rf(18),
      fontFamily: "SemiBold",
      color: "#fff",
    },
  });
//next btn

//standardButton Styles starts here
export const Nextbtnstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),
      width: getPercent(40, width),
      flexDirection: "row",
      backgroundColor: "#0C4690",
      alignSelf: "center",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      alignItems: "center",
      justifyContent: "space-around",
    },

    text: {
      fontSize: rf(18),
      fontFamily: "SemiBold",
      color: "#fff",
    },
    iconbody: {
      height: 20,
      width: 20,
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });

//  Header starts here

export const Headerstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(12, height),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      paddingTop:
        Platform.OS === "ios" ? getPercent(3, height) : getPercent(0, height),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    logobody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
    },
    siriyogbody: {
      height: getPercent(5, height),
      width: getPercent(22, width),
      overflow: "hidden",
      marginLeft: 12,
    },
    titlebody: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      justifyContent: "space-between",
      paddingLeft: 10,
    },
    titletext: {
      fontFamily: "Bold",
      fontSize: rf(13),
      color: "#4B4B4B",
    },
    locationbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
  });

//Field styles

export const Fieldstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(90, width),
      height: getPercent(6, height),
      borderBottomWidth: 1,
      borderColor: "#4B4B4B",
      alignSelf: "center",
      justifyContent: "center",
      paddingLeft: 5,
      marginVertical: 3,
      flexDirection: "row",
      alignItems: "center",
      paddingRight: 15,
      justifyContent: "space-between",
    },
    input: {
      width: "80%",
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#000000",
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
  });
