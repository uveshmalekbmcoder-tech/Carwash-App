import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // ✅ Dropdown

const cars = [
  {
    id: "1",
    model: "BMW 1 Series",
    brand: "BMW",
    number: "ABC 1234",
    logo: require("../assets/bmw.png"),
  },
  {
    id: "2",
    model: "Audi A3",
    brand: "Audi",
    number: "CBA 1234",
    logo: require("../assets/audi.png"),
  },
];

const CarListScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [brand, setBrand] = useState("BMW"); // default brand
  const [model, setModel] = useState("");
  const [number, setNumber] = useState("");

  const renderCar = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.logo} style={styles.logo} />
      <View>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.brand}>Brand: {item.brand}</Text>
        <Text style={styles.number}>
          Vehicle Number:{" "}
          <Text style={{ fontWeight: "bold" }}>{item.number}</Text>
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Add Car</Text>

      {/* Car List */}
      <FlatList
        data={cars}
        renderItem={renderCar}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Add Car Button */}
      <TouchableOpacity style={styles.addBtn} onPress={() => setShowModal(true)}>
        <Text style={styles.addBtnText}>+ Add Car</Text>
      </TouchableOpacity>

      {/* Bottom Modal */}
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Add Car Details</Text>
                <Text style={styles.modalSubtitle}>
                  We’ll save your details for faster bookings.
                </Text>

                {/* Car Brand Dropdown */}
                <Text style={styles.label}>Select Car Brand</Text>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={brand}
                    onValueChange={(itemValue) => setBrand(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="#0A0D2E"
                  >
                    <Picker.Item label="BMW" value="BMW" />
                    <Picker.Item label="Audi" value="Audi" />
                    <Picker.Item label="Maruti Suzuki" value="Maruti Suzuki" />
                    <Picker.Item label="Hyundai" value="Hyundai" />
                    <Picker.Item label="Tata" value="Tata" />
                  </Picker>
                </View>

                {/* Car Model */}
                <Text style={styles.label}>Car Model</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Model"
                  placeholderTextColor="#888"
                  value={model}
                  onChangeText={setModel}
                />

                {/* Vehicle Number */}
                <Text style={styles.label}>
                  Vehicle Number / License Plate
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="ABC 1234"
                  placeholderTextColor="#888"
                  value={number}
                  onChangeText={setNumber}
                />

                {/* Save Button */}
                <TouchableOpacity
                  style={styles.saveBtn}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.saveBtnText}>+ Add Car</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default CarListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0D2E" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C2147",
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    borderRadius: 15,
  },
  logo: { width: 50, height: 50, marginRight: 15, resizeMode: "contain" },
  model: { fontSize: 16, fontWeight: "bold", color: "white" },
  brand: { fontSize: 14, color: "lightgray", marginTop: 2 },
  number: { fontSize: 14, color: "lightgray", marginTop: 2 },
  addBtn: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
  },
  addBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", color: "#0A0D2E" },
  modalSubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    marginTop: 5,
  },
  label: { fontSize: 14, fontWeight: "600", marginTop: 10, color: "#000" },
  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    padding: 12,
    marginTop: 5,
    fontSize: 14,
    color: "#000",
  },
  pickerWrapper: {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    marginTop: 5,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  saveBtn: {
    backgroundColor: "#0A0D2E",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  saveBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
