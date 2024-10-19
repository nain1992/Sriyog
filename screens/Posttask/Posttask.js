import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Posttask/main";
import Header from "../../globalComponents/Header";
import { useState } from "react";
import Bottomtabmenu from "../../globalComponents/Bottomtabmenu";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";
import Field from "../../globalComponents/Field";

const Posttask = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [name, setName] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [lookingfor, setLookingfor] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [massege, setMassege] = useState("");

  const handleSubmit = () => {
    props?.navigation?.navigate("Postsubmitsuccess");
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: getPercent(10, height) }}>
          <Header title={"| Post a Task"} navigation={props?.navigation} />
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
            placeholder="I'm Looking for"
            value={lookingfor}
            onChangeText={(val) => setLookingfor(val)}
          />
          {/* <Field
            placeholder="Phone"
            value={phone}
            onChangeText={(val) => setPhone(val)}
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
          />

          <Field
            placeholder="Urgency"
            value={type}
            onChangeText={(val) => setType(val)}
            dropdown
          />
          <Text style={styles.msgtext}>Message</Text>
          <View style={styles.messagetypebody}>
            <TextInput
              style={styles.input}
              placeholder="Type Here"
              placeholderTextColor={"rgba(75, 75, 75, 0.7)"}
              multiline
              value={massege}
              onChangeText={(val) => setMassege(val)}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitbtnbody}>
            <Text style={styles.btntext}>SUBMIT</Text>
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

export default connect(mapStateToProps, {})(Posttask);
