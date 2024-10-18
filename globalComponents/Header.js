import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Headerstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Header = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Headerstyles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.logobody}>
        <Image
          source={require("../assets/logoo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.siriyogbody}>
        <Image
          source={require("../assets/SRIYOG.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titlebody}>
        <Text style={styles.titletext}>{title}</Text>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Contact")}
          style={styles.locationbody}
        >
          <Image
            source={require("../assets/9.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Header);
