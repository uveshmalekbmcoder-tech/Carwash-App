import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

const BookingSummary = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>{"< Back"}</Text>
        </TouchableOpacity>

        {/* Top Image */}
        <Image
          source={require("../assets/imag4.png")} // 👈 your image path
          style={styles.topImage}
        />

        {/* Title */}
        <View style={styles.header}>
          <Text style={styles.title}>Exterior Wash</Text>
          <Text style={styles.subtitle}>
            Fast 30-min exterior cleaning with eco-friendly shampoo.
          </Text>
        </View>

        {/* Car Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Car Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Brand</Text>
            <Text style={styles.detailValue}>BMW</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Car Model</Text>
            <Text style={styles.detailValue}>BMW 1 Series</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Vehicle Number</Text>
            <Text style={styles.detailValue}>ABC 1234</Text>
          </View>
        </View>

        {/* Booking Summary */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Booking Summary</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>7 July 2025, Wednesday</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Time</Text>
            <Text style={styles.detailValue}>12:00 am - 02:00 pm</Text>
          </View>
          <View style={styles.detailRowColumn}>
            <Text style={styles.detailLabel}>Drop-off location</Text>
            <Text style={styles.detailValue}>
              New York (JFK) – John F. Kennedy International Airport
            </Text>
          </View>
        </View>

        {/* Pricing Card */}
        <View style={styles.priceCard}>
          <View style={styles.priceColumn}>
            <Text style={styles.cardLabel}>Hatchback</Text>
          </View>
          <View style={styles.priceColumn}>
            <Text style={styles.cardSubLabel}>Duration</Text>
            <Text style={styles.cardValue}>15 Mins</Text>
          </View>
          <View style={styles.priceColumn}>
            <Text style={styles.cardSubLabel}>Price</Text>
            <Text style={styles.cardValue}>$10</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <TouchableOpacity
        style={styles.bookBtn}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.bookText}>Make Payments</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BookingSummary;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0D2E" },

  backBtn: { marginTop: 10, marginLeft: 15 },
  backText: { color: "white", fontSize: 16 },

  topImage: {
    width: "92%",
    height: 180,
    alignSelf: "center",
    borderRadius: 12,
    marginVertical: 10,
  },

  header: { marginHorizontal: 20, marginBottom: 15 },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: { color: "gray", fontSize: 14 },

  // Card Style
  card: {
    backgroundColor: "#1C2147",
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  detailRowColumn: {
    marginBottom: 6,
  },
  detailLabel: { color: "gray", fontSize: 14 },
  detailValue: {
    color: "white",
    fontSize: 14,
    textAlign: "right",
    marginLeft: 10,
  },

  // Pricing card
  priceCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1C2147",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 14,
    marginHorizontal: 20,
    marginTop: 5,
  },
  priceColumn: { flex: 1, alignItems: "center" },
  cardLabel: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  cardSubLabel: {
    color: "gray",
    fontSize: 12,
    marginBottom: 4,
  },
  cardValue: { color: "white", fontSize: 16, fontWeight: "bold" },

  bookBtn: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  bookText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
