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

const Singleproffessional = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  const handleBooking = () => {
    props?.navigation?.navigate("Proffessionalqr");
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header
            title={"| Biratnagar > Septic ..."}
            navigation={props?.navigation}
          />
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
          <View style={styles.userimagebody}>
            <Image
              source={require("../../assets/100.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.userinfowrapper}>
            <Text style={styles.nametext}>Shivram Kamat</Text>
            <Text style={styles.numtext}>987654321</Text>
            <Text style={styles.protext}>Septic Tank Cleaner</Text>
            <Text style={styles.locatext}>Biratnagar</Text>
          </View>
          <View style={styles.paymentmethodlogowrapper}>
            <TouchableOpacity style={styles.backiconbody}>
              <Image
                source={require("../../assets/28.png")}
                style={{ height: "70%", width: "70%" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleBooking}
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

            <TouchableOpacity style={styles.backiconbody}>
              <Image
                source={require("../../assets/27.png")}
                style={{ height: "70%", width: "70%" }}
                resizeMode="contain"
              />
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

export default connect(mapStateToProps, {})(Singleproffessional);
