import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // ✅ must import
import img2 from "../assets/imag2.png";

const Bookingtab = () => {
  const navigation = useNavigation(); // ✅ works now

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Bookings</Text>

      <View style={styles.card}>
        {/* Car Wash Image */}
        <Image source={img2} style={styles.image} resizeMode="cover" />

        {/* Booking Info */}
        <View style={styles.info}>
          <Text style={styles.service}>Exterior Wash</Text>
          <Text style={styles.car}>BMW 1 Series</Text>
          <Text style={styles.technician}>Technician Assigned</Text>

          {/* View Details Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("BookingSummary")} // ✅ navigate
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A2A", // dark navy background
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#2F2F4F",
    borderRadius: 12,
    alignItems: "center",
    padding: 8,
    marginBottom: 12,
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  service: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  car: {
    fontSize: 14,
    color: "#D0D0D0",
    marginTop: 2,
  },
  technician: {
    fontSize: 12,
    color: "#B0B0B0",
    marginVertical: 4,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2F2F4F",
  },
});

export default Bookingtab;
