import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Bottomtabmenustyles } from "../styles/Global/main";

const Bottomtabmenu = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Bottomtabmenustyles({ width, height });

  let menuicons = [
    {
      image: require("../assets/19.png"),
      title: "Home",
      onPress: () => props?.navigation?.navigate("Home"),
    },
    {
      image: require("../assets/20.png"),
      title: "Professions",
      onPress: () => props?.navigation?.navigate("Proffessionscreen"),
    },
    {
      image: require("../assets/21.png"),
      title: "Post a Task",
      onPress: () => props?.navigation?.navigate("Posttask"),
    },
    {
      image: require("../assets/22.png"),
      title: "Search",
      onPress: () => props?.navigation?.navigate("Search"),
    },
    {
      image: require("../assets/23.png"),
      title: "Contact",
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
            <View style={styles.iconbody}>
              <Image
                source={item?.image}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.icontitlename}>{item?.title}</Text>
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
