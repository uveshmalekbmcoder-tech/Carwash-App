import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const TermsConditionsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{"< Back"}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.header}>Terms & Conditions</Text>

      {/* Content */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cancelation Policy</Text>
        <Text style={styles.sectionText}>
          If you need to cancel your appointment with our car wash app, please do so at least 
          24 hours in advance to avoid any cancellation fees. Cancellations made less than 
          24 hours before your scheduled time may incur a charge. We appreciate your understanding!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms & conditions</Text>
        <Text style={styles.sectionText}>
          Welcome to our car wash! By using our services, you agree to the following terms 
          and conditions: All vehicles must be in good working condition. We are not responsible 
          for any pre-existing damage. Please remove personal items from your vehicle before 
          washing. Payment is required upon service completion. Thank you for choosing us 
          to keep your car sparkling clean!
        </Text>
      </View>
    </ScrollView>
  );
};

export default TermsConditionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0D2E",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backBtn: {
    marginBottom: 15,
  },
  backText: {
    color: "white",
    fontSize: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
  sectionText: {
    color: "#aaa",
    fontSize: 14,
    lineHeight: 20,
  },
});
