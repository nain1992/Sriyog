import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Contact/main";
import Header from "../../globalComponents/Header";
import Bottomtabmenu from "../../globalComponents/Bottomtabmenu";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";
import MapView, { Marker } from "react-native-maps";

const Contact = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  let contactdata = [
    {
      image: require("../../assets/32.png"),
      title: "SRIYOG Consulting Pvt. Ltd. Himalayan Road, Biratnagar,Nepal",
    },
    {
      image: require("../../assets/34.png"),
      title: "General Queries : info@sriyog.com Business : bdo@sriyog.com",
    },
    {
      image: require("../../assets/33.png"),
      title: "Hotline : +977 98520 24365",
    },
    {
      image: require("../../assets/31.png"),
      title: "www.sriyog.com",
    },
  ];

  const handleDropzone = () => {
    props?.navigation?.navigate("Becomedropzone");
  };

  const initialRegion = {
    latitude: 26.4589,
    longitude: 87.2718,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header title={"| Contact"} />

          <View style={styles.mapview}>
            <MapView
              style={{ flex: 1, height: 200 }}
              initialRegion={initialRegion}
            >
              <Marker
                coordinate={{
                  latitude: 26.4589,
                  longitude: 87.2718,
                }}
                title="SRIYOG Consulting Pvt. Ltd."
                description="Himalayan Road, Biratnagar, Nepal"
              />
            </MapView>
          </View>

          <Text style={styles.contacttext}>Contact us</Text>
          {contactdata?.map((item, index) => {
            return (
              <View key={index} style={styles.contactinforwrapper}>
                <View style={styles.iconbody}>
                  <Image
                    source={item?.image}
                    style={{ height: "70%", width: "70%" }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.textbody}>
                  <Text style={styles.addressinfortext}>{item?.title}</Text>
                </View>
              </View>
            );
          })}
          <View style={styles.dropzonewrapper}>
            <TouchableOpacity
              onPress={handleDropzone}
              style={styles.dropzonebtn}
            >
              <Text style={styles.btntext}>Become a Dropzone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappbody}>
              <Image
                source={require("../../assets/29.png")}
                style={{ height: "80%", width: "80%" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappbody}>
              <Image
                source={require("../../assets/36.png")}
                style={{ height: "80%", width: "80%" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappbody}>
              <Image
                source={require("../../assets/7.png")}
                style={{ height: "80%", width: "80%" }}
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

export default connect(mapStateToProps, {})(Contact);
