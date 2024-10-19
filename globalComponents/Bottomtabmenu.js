import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Bottomtabmenustyles } from "../styles/Global/main";
import { getPercent } from "../middleware";

const Bottomtabmenu = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Bottomtabmenustyles({ width, height });

  let menuicons = [
    {
      image: require("../assets/19.png"),
      title: "Home",
      height: 20,
      width: 20,
      overflow: "hidden",
      iconheight: "100%",
      iconwidth: "100%",
      onPress: () => props?.navigation?.navigate("Home"),
    },
    {
      image: require("../assets/101.png"),
      title: "Professions",
      height: 20,
      width: 20,
      overflow: "hidden",
      iconheight: "100%",
      iconwidth: "100%",
      onPress: () => props?.navigation?.navigate("Proffessionscreen"),
    },
    {
      image: require("../assets/21.png"),
      title: "Post a Task",
      height: getPercent(4, height),
      width: getPercent(4, height),
      backgroundColor: "#D9D9D9",
      iconheight: "70%",
      iconwidth: "70%",
      borderRadius: 100,
      marginBottom: 10,

      onPress: () => props?.navigation?.navigate("Posttask"),
    },
    {
      image: require("../assets/22.png"),
      title: "Search",
      height: 20,
      width: 20,
      iconheight: "100%",
      iconwidth: "100%",
      overflow: "hidden",
      onPress: () => props?.navigation?.navigate("Search"),
    },
    {
      image: require("../assets/23.png"),
      title: "Contact",
      height: 20,
      width: 20,
      overflow: "hidden",
      iconheight: "100%",
      iconwidth: "100%",
      onPress: () => props?.navigation?.navigate("Contact"),
    },
  ];

  return (
    <View style={styles.container}>
      {menuicons?.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={item?.onPress}
            key={index}
            style={styles.iconwrapper}
          >
            <View
              style={[
                styles.iconbody,
                {
                  height: item?.height,
                  width: item?.width,
                  borderRadius: item?.borderRadius,
                  backgroundColor: item?.backgroundColor,
                },
              ]}
            >
              <Image
                source={item?.image}
                style={{ height: item?.iconheight, width: item?.iconwidth }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.icontitlename,
                {
                  marginBottom: item?.marginBottom,
                },
              ]}
            >
              {item?.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Bottomtabmenu);
