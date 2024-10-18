import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Home/main";
import Header from "../../globalComponents/Header";
import Proffesions from "./components/Proffesions";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Bottomtabmenu from "../../globalComponents/Bottomtabmenu";
import { getPercent } from "../../middleware";

const Home = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [phonenumber, setPhonenumber] = useState("");

  let profeesionsdata = [
    {
      image: require("../../assets/11.png"),
      title: "Plumber",
    },
    {
      image: require("../../assets/12.png"),
      title: "Electrician",
    },
    {
      image: require("../../assets/13.png"),
      title: "Tattooist",
    },
    {
      image: require("../../assets/14.png"),
      title: "Barber",
    },
    {
      image: require("../../assets/15.png"),
      title: "Painter",
    },
  ];

  let profeesionalsdata = [
    {
      image: require("../../assets/16.png"),
      title: "Ghanashyam",
    },
    {
      image: require("../../assets/16.png"),
      title: "Binod",
    },
    {
      image: require("../../assets/16.png"),
      title: "Santosh",
    },
    {
      image: require("../../assets/16.png"),
      title: "Kripanand",
    },
  ];

  const handleHelpPress = () => {
    props?.navigation?.navigate("Helpsubmitsuccess");
  };
  const handlePress = () => {
    props?.navigation?.navigate("Proffessionscreen");
  };
  const handleproffesionalPress = () => {
    props?.navigation?.navigate("Search");
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header title={"| Kathmandu"} navigation={props?.navigation} />
          <View style={styles.bannerbody}>
            <Image
              source={require("../../assets/10.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.verifytext}>Verified</Text>
          <Text style={styles.profession}>Skilled Professionals</Text>
          <Text style={styles.topjobs}>Top Professions</Text>
          <View style={styles.professionswrapper}>
            {profeesionsdata.map((item, index) => {
              return (
                <Proffesions onPress={handlePress} key={index} item={item} />
              );
            })}
          </View>

          <Text style={styles.topjobs}>Top Professionals</Text>
          <View style={styles.professionswrapper}>
            {profeesionalsdata.map((item, index) => {
              return (
                <Proffesions
                  onPress={handleproffesionalPress}
                  imageheight
                  imagewidth
                  key={index}
                  item={item}
                />
              );
            })}
          </View>
          <View style={styles.enterphonenobody}>
            <View style={styles.iconbody}>
              <Image
                source={require("../../assets/40.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.iconbody}>
              <Image
                source={require("../../assets/41.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Phone Number"
              keyboardType="decimal-pad"
              placeholderTextColor={"#0C4690"}
              value={phonenumber}
              onChangeText={(val) => setPhonenumber(val)}
            />
            <TouchableOpacity
              onPress={handleHelpPress}
              style={styles.helpbtnbody}
            >
              <Text style={styles.helpttext}>Help</Text>
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
export default connect(mapStateToProps, {})(Home);
