import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Home/Proffesions";
import { getPercent } from "../../../middleware";

const Proffesions = (props) => {
  let { item, imageheight, imagewidth, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity onPress={onPress} style={styles.professionbody}>
      <View
        style={[
          styles.iconbody,
          {
            height: imageheight ? getPercent(8, height) : getPercent(5, height),
            width: imagewidth ? getPercent(8, height) : getPercent(5, height),
          },
        ]}
      >
        <Image
          source={item?.image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.proffesiontitle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Proffesions);
