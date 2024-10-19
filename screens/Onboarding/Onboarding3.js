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

const Onboarding3 = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const HandlenextPress = () => {
    props?.navigation?.navigate("Onboarding4");
  };
  const handleSkip = () => {
    props?.navigation?.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../../assets/6.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.namewrapper}>
        <Text style={styles.introtext}>
          I feel happy to become a part of Digital Profiling system made by
          SRIYOG. I have been working as caterer for 40 years in Biratnagar and
          I’m happy that I get leads from this APP.
        </Text>
        <View>
          <Text style={styles.nametext}>Caterer</Text>
          <Text style={styles.name}>Ramu Kamat</Text>
        </View>
      </View>

      <View style={styles.btnwrapper}>
        <Nextbtn title={"Next"} onPress={HandlenextPress} />
        <Text onPress={handleSkip} style={styles.skipbtn}>
          Skip
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Onboarding3);
