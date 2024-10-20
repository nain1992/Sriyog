import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Onboarding/main";
import Nextbtn from "../../globalComponents/Nextbtn";
import StandardButton from "../../globalComponents/StandardButton";

const Onboarding4 = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const HandlenextPress = () => {
    props?.navigation?.navigate("Home");
  };
  const handleSkip = () => {
    props?.navigation?.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../../assets/7.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.namewrapper}>
        <Text style={styles.introtext}>
          The latest practice of using digital technology to solve social
          problems like unemployment through digital connectivity is SRIYOG,
          which has been operating in a start-up model.
        </Text>
        <View>
          <Text style={styles.nametext}>Founder</Text>
          <Text style={styles.name}>PRACAS Upreti</Text>
        </View>
      </View>

      <View style={styles.btnwrapper}>
        <StandardButton title={"Home"} onPress={HandlenextPress} />
        <Text
          onPress={handleSkip}
          style={[
            styles.skipbtn,
            {
              color: "#4B4B4B",
            },
          ]}
        >
          Start Exploring
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Onboarding4);
