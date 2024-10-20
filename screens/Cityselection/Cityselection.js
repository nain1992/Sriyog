import React, { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Cityselection/main";
import StandardButton from "../../globalComponents/StandardButton";

const Cityselection = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Biratnagar");
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  const languages = ["Biratnagar", "Kathmandu", "Pokhara", "Lalitpur"];

  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsPickerVisible(false);
  };

  const _handlePress = () => {
    props?.navigation?.navigate("Onboarding");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logowrapper}>
        <Image
          source={require("../../assets/logoo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.languagepickerbody}>
        <TouchableOpacity onPress={togglePicker} style={styles.languageButton}>
          <Text style={styles.languagetext}>{selectedLanguage}</Text>
          <View style={styles.iconbody}>
            <Image
              source={require("../../assets/1.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.butonandtextwrapper}>
        <View style={styles.innerwrapper}>
          <StandardButton title={"ENTER"} onPress={_handlePress} />
          <View style={styles.Sponserwrapper}>
            <Image
              source={require("../../assets/2.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.searchtext}>Search > Connect > Work</Text>
        </View>
      </View>
      {isPickerVisible && (
        <View style={styles.dropdown}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language}
              onPress={() => selectLanguage(language)}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownItemText}>{language}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Cityselection);
