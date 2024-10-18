import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Nextbtnstyles } from "../styles/Global/main";
const Nextbtn = (props) => {
  let { customStyles, textStyles, onPress, title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Nextbtnstyles({ width, height });

  return (
    <TouchableOpacity
      style={[styles.container, customStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
      <View style={styles.iconbody}>
        <Image
          source={require("../assets/4.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Nextbtn);
