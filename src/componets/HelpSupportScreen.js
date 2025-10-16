import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HelpSupportScreen = ({ navigation }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Refund or payment issue",
      answer:
        "For refund or payment-related issues, please contact our support team.",
    },
    {
      question:
        "What options are available for selecting a specific car wash location?",
      answer:
        "You can choose your preferred car wash location in the app while booking a service.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>{"< Back"}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.header}>Help & Support</Text>
      <Text style={styles.subHeader}>
        Need Assistance? We're Here To Help.
      </Text>

      {/* Contact Info */}
      <View style={styles.contactBox}>
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL("mailto:support@yourapp.com")}
        >
          <Ionicons name="mail-outline" size={20} color="white" />
          <Text style={styles.contactText}>support@yourapp.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL("tel:+96512347894")}
        >
          <Ionicons name="call-outline" size={20} color="white" />
          <Text style={styles.contactText}>+965-1234-7894</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem}>
          <Ionicons name="chatbubbles-outline" size={20} color="white" />
          <Text style={styles.contactText}>Chat with Support</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Section */}
      <Text style={styles.faqTitle}>
        <Ionicons name="help-circle-outline" size={18} color="white" /> View FAQs
      </Text>

      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity
            style={styles.faqHeader}
            onPress={() => toggleFAQ(index)}
          >
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <Ionicons
              name={openIndex === index ? "chevron-up" : "chevron-down"}
              size={18}
              color="white"
            />
          </TouchableOpacity>
          {openIndex === index && (
            <Text style={styles.faqAnswer}>{faq.answer}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default HelpSupportScreen;

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
    marginBottom: 6,
  },
  subHeader: {
    color: "lightgray",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 25,
  },
  contactBox: {
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#1C2147",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  contactText: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },
  faqTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginBottom: 12,
  },
  faqItem: {
    backgroundColor: "#1C2147",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    flex: 1,
    paddingRight: 8,
  },
  faqAnswer: {
    color: "lightgray",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
});
