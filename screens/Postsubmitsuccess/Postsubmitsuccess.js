import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Helpsubmitsuccess/main";
import Header from "../../globalComponents/Header";
import { useState } from "react";
import Bottomtabmenu from "../../globalComponents/Bottomtabmenu";

const Postsubmitsuccess = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const handlePress = () => {
    props?.navigation?.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Header title={"| Post Submitted"} navigation={props?.navigation} />
      <View style={styles.contentwrapper}>
        <Text style={styles.labletext}>
          Your request has been submitted successfully.{"\n"}
        </Text>
        <Text style={styles.membertext}>
          Our team member will contact you shortly.{"\n"}
        </Text>
        <TouchableOpacity onPress={handlePress} style={styles.homebtnbody}>
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/24.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.btntext}>Home</Text>
        </TouchableOpacity>
      </View>

      <Bottomtabmenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Postsubmitsuccess);
