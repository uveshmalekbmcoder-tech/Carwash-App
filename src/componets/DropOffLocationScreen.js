import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DropOffLocationScreen() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("Home");
  const [location, setLocation] = useState(
    "New York(JFK) - John F. Kennedy international airport"
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{"< Back"}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Drop-off location</Text>

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        {["Home", "Office"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.toggleButton,
              selected === item && styles.selectedToggle,
            ]}
            onPress={() => setSelected(item)}
          >
            <Text
              style={[
                styles.toggleText,
                selected === item && styles.selectedToggleText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Location Input */}
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter drop-off location"
        placeholderTextColor="#999"
      />

      {/* Save Location Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Location</Text>
      </TouchableOpacity>

      {/* Spacer */}
      <View style={{ flex: 1 }} />

      {/* Book Now Button */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate("BookingSummary")}
      >
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000428", // Dark blue background
    padding: 20,
  },
  backText: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#1c1c3c",
    marginRight: 10,
  },
  selectedToggle: {
    backgroundColor: "white",
  },
  toggleText: {
    color: "white",
    fontSize: 14,
  },
  selectedToggleText: {
    color: "black",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#0a0a23",
    borderColor: "#444",
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    color: "white",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "white",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  saveButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: "white",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  bookButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
