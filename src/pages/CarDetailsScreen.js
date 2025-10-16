import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const CarDetailsScreen = ({ navigation }) => {
  const [carBrand, setCarBrand] = useState("BMW"); // ✅ Default selected
  const [carModel, setCarModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");

  const handleSave = () => {
    console.log("Car Details:", { carBrand, carModel, licensePlate });
    navigation.navigate("Home"); // 👉 Next screen
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000224" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Add Your Car Details</Text>
        <Text style={styles.subtitle}>
          Please provide your car information below.
        </Text>

        <View style={styles.form}>
          {/* Car Brand Dropdown */}
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={carBrand}
              onValueChange={(value) => setCarBrand(value)}
              dropdownIconColor="#fff"
              style={styles.picker}
            >
              <Picker.Item label="Toyota" value="Toyota" />
              <Picker.Item label="Honda" value="Honda" />
              <Picker.Item label="Hyundai" value="Hyundai" />
              <Picker.Item label="Maruti Suzuki" value="Maruti Suzuki" />
              <Picker.Item label="Tata" value="Tata" />
              <Picker.Item label="Mahindra" value="Mahindra" />
              <Picker.Item label="BMW" value="BMW" />
              <Picker.Item label="Mercedes" value="Mercedes" />
            </Picker>
          </View>

          {/* Car Model */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Car Model (e.g., City, Swift)"
              placeholderTextColor="#888"
              value={carModel}
              onChangeText={setCarModel}
            />
          </View>

          {/* License Plate */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="License Plate Number"
              placeholderTextColor="#888"
              value={licensePlate}
              onChangeText={setLicensePlate}
              autoCapitalize="characters"
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={[
              styles.saveButton,
              !(carBrand && carModel && licensePlate) &&
                styles.saveButtonDisabled,
            ]}
            onPress={handleSave}
            disabled={!(carBrand && carModel && licensePlate)}
          >
            <Text style={styles.saveButtonText}>Save & Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000224",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    backgroundColor: "#1E1E3F",
    borderRadius: 16,
    padding: 25,
  },
  pickerWrapper: {
    backgroundColor: "#2A2A4A",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3a3a5a",
    marginBottom: 20,
    overflow: "hidden",
  },
  picker: {
    color: "#fff",
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
  },
  inputWrapper: {
    marginBottom: 20,
    backgroundColor: "#2A2A4A",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3a3a5a",
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonDisabled: {
    backgroundColor: "#c5c5c5",
  },
  saveButtonText: {
    color: "#000224",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CarDetailsScreen;
