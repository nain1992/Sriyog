import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Proffessionscreen/main";
import Header from "../../globalComponents/Header";
import { useState } from "react";
import Bottomtabmenu from "../../globalComponents/Bottomtabmenu";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";

const Proffessionscreen = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [selectedProffession, setSelectedProffession] =
    useState("Construction");
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const professions = [
    "Construction",
    "Electrician",
    "Tattooist",
    "Barber",
    "Painter",
  ];

  let proffessionsiconsdata = [
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
  ];

  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  const handleProffession = (profession) => {
    setSelectedProffession(profession);
    setIsPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header title={"| Proffessions"} navigation={props?.navigation} />
          <View style={styles.pickerbody}>
            <TouchableOpacity
              onPress={togglePicker}
              style={styles.proffessionButton}
            >
              <Text style={styles.pickertext}>{selectedProffession}</Text>
              <View style={styles.iconbody}>
                <Image
                  source={require("../../assets/1.png")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.proffesionswrapper}>
            {proffessionsiconsdata?.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.itembodywrapper}>
                  <View style={styles.imagebody}>
                    <Image
                      source={item?.image}
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.proffesionname}>{item?.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </KeyboardAwareScrollView>
      {isPickerVisible && (
        <View style={styles.dropdown}>
          {professions.map((profession) => (
            <TouchableOpacity
              key={profession}
              onPress={() => handleProffession(profession)}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownItemText}>{profession}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Bottomtabmenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Proffessionscreen);
