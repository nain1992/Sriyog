import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { Fieldstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Field = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Fieldstyles({ width, height });

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={"rgba(75, 75, 75, 0.7)"}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Field);
