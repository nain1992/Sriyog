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
    bannerbody: {
      height: getPercent(32, height),
      width: getPercent(90, width),
      borderRadius: 10,
      overflow: "hidden",
      marginVertical: getPercent(1, height),
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    verifytext: {
      fontFamily: "Regular",
      fontSize: rf(18),
      color: "#4B4B4B",
      paddingLeft: getPercent(5, width),
      fontStyle: "italic",
      lineHeight: 22,
    },
    profession: {
      fontFamily: "SemiBold",
      fontSize: rf(18),
      color: "#4B4B4B",
      paddingLeft: getPercent(5, width),
      lineHeight: getPercent(3.5, height),
    },
    topjobs: {
      fontFamily: "SemiBold",
      fontSize: rf(15),
      color: "#4B4B4B",
      paddingLeft: getPercent(5, width),
      fontStyle: "italic",
      lineHeight: getPercent(3.5, height),
    },
    professionswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(11, height),
      justifyContent: "space-between",
    },
    enterphonenobody: {
      height: getPercent(5.5, height),
      width: getPercent(90, width),
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#0C4690",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 10,
      justifyContent: "space-between",
      marginVertical: getPercent(2, height),
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      marginRight: 5,
    },
    input: {
      width: "62%",
      fontFamily: "Regular",
      fontSize: rf(13),
      color: "#0C4690",
    },
    helpbtnbody: {
      height: "100%",
      width: "20%",
      backgroundColor: "#0C4690",
      justifyContent: "center",
      alignItems: "center",
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    helpttext: {
      fontFamily: "Regular",
      fontSize: rf(15),
      color: "#fff",
    },
  });
