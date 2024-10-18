import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Singleproffessional/main";
import Header from "../../globalComponents/Header";
import { useState } from "react";
import Bottomtabmenu from "../../globalComponents/Bottomtabmenu";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";

const Proffessionalqr = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header title={"| Pay With IMEPay"} navigation={props?.navigation} />
          <View style={styles.paymentmethodlogowrapper}>
            <View style={styles.iconbody}>
              <Image
                source={require("../../assets/25.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.logobody}>
              <Image
                source={require("../../assets/26.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View
            style={[
              styles.userimagebody,
              {
                borderRadius: 0,
              },
            ]}
          >
            <Image
              source={require("../../assets/30.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.userinfowrapper}>
            <Text style={styles.nametext}>Shivram Kamat</Text>
            <Text style={styles.nametext}>987654321</Text>
            <Text style={styles.nametext}>Septic Tank Cleaner</Text>
            <Text style={styles.nametext}>Biratnagar</Text>
          </View>
          <View
            style={[
              styles.paymentmethodlogowrapper,
              {
                justifyContent: "center",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => alert("Coming Soon")}
              style={styles.booknowbtnbody}
            >
              <View style={styles.backiconbody}>
                <Image
                  source={require("../../assets/29.png")}
                  style={{ height: "50%", width: "50%" }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.btntext}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <Bottomtabmenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Proffessionalqr);
