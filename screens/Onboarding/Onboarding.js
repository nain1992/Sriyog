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

const Onboarding = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const HandlenextPress = () => {
    props?.navigation?.navigate("Onboarding2");
  };
  const handleSkip = () => {
    props?.navigation?.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../../assets/3.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.namewrapper}>
        <Text style={styles.introtext}>
          Digitalization is the use of digital technologies to change business
          processes and projects—such as skilling employees to use new software
          platforms designed to help launch products faster.
        </Text>
        <View>
          <Text style={styles.nametext}>Honorable</Text>
          <Text style={styles.name}>Bhim Parajuli</Text>
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
export default connect(mapStateToProps, {})(Onboarding);
