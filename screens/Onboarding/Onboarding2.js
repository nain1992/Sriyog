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

const Onboarding2 = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const HandlenextPress = () => {
    props?.navigation?.navigate("Onboarding3");
  };
  const handleSkip = () => {
    props?.navigation?.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../../assets/5.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.namewrapper}>
        <Text style={styles.introtext}>
          A gig economy is a short term employment market that relies heavily on
          temporary and part-time positions filled by independent contractors
          and freelancers rather than full-time permanent employees.
        </Text>
        <View>
          <Text style={styles.nametext}>Civil Contractor</Text>
          <Text style={styles.name}>Keshab Prasad Gautam</Text>
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
export default connect(mapStateToProps, {})(Onboarding2);
