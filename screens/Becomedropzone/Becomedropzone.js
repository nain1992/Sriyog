import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Becomedropzone/main";
import Header from "../../globalComponents/Header";
import { useState } from "react";
import Bottomtabmenu from "../../globalComponents/Bottomtabmenu";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";
import Field from "../../globalComponents/Field";

const Becomedropzone = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [name, setName] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [lookingfor, setLookingfor] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [landmark, setLandmark] = useState("");
  const [termsaccepted, setTermsaccepted] = useState(false);

  const handleSubmit = () => {
    props?.navigation?.navigate("Dropzonesuccess");
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header title={"|Become a DropZone"} navigation={props?.navigation} />
          <Field
            placeholder="First Name"
            value={name}
            onChangeText={(val) => setName(val)}
          />
          <Field
            placeholder="Middle Name"
            value={middlename}
            onChangeText={(val) => setMiddlename(val)}
          />
          <Field
            placeholder="Last Name"
            value={lastname}
            onChangeText={(val) => setLastname(val)}
          />
          <Field
            placeholder="Type of Entity"
            value={lookingfor}
            onChangeText={(val) => setLookingfor(val)}
            dropdown
          />
          {/* <Field
            placeholder="Phone"
            value={phone}
            onChangeText={(val) => setPhone(val)}
            keyboardType="decimal-pad"
          /> */}
          <View
            style={[
              styles.feildcontainer,
              {
                justifyContent: "center",
              },
            ]}
          >
            <TouchableOpacity style={styles.fieldiconbody}>
              <Image
                source={require("../../assets/50.png")}
                style={{ height: "80%", width: "80%" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fieldiconbody}>
              <Image
                source={require("../../assets/99.png")}
                style={{ height: "80%", width: "80%" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Phone"
              value={phone}
              onChangeText={(val) => setPhone(val)}
              style={styles.fieldinput}
              placeholderTextColor={"rgba(75, 75, 75, 0.7)"}
              keyboardType="decimal-pad"
            />
          </View>

          <Field
            placeholder="City"
            value={city}
            onChangeText={(val) => setCity(val)}
            dropdown
          />

          <Field
            placeholder="Area"
            value={type}
            onChangeText={(val) => setType(val)}
            dropdown
          />
          <Field
            placeholder="Nearest Landmark"
            value={landmark}
            onChangeText={(val) => setLandmark(val)}
          />
          <View style={styles.termswrapper}>
            <TouchableOpacity
              onPress={() => setTermsaccepted(!termsaccepted)}
              style={[
                styles.boxbody,
                {
                  backgroundColor: termsaccepted ? "#4B4B4B" : "transparent",
                },
              ]}
            ></TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.termstext}>Terms And Conditions</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.Joinbtnbody}>
            <Text style={styles.btntext}>JOIN NOW</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <Bottomtabmenu navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Becomedropzone);
