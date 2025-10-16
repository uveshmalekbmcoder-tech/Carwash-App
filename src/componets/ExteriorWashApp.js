import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExteriorWashScreen = () => {
  const navigation = useNavigation(); // ✅ use navigation hook
  const [selected, setSelected] = useState("Hatchback");

  const options = [
    { type: "Hatchback", duration: "15 Mins", price: "$10" },
    { type: "Sedan", duration: "25 Mins", price: "$15" },
    { type: "SUV", duration: "35 Mins", price: "$25" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "Sales man",
      date: "1 July 2025",
      avatar: "https://i.pravatar.cc/100?img=1",
      text: "I Recently Had My Car Washed At Wash & Go, And I Couldn't Be Happier! The Team Was Professional And Quick, Completing The Exterior Wash In Just 30 Minutes. My Car Looks Brand New, And I Appreciate Their Use Of Eco-Friendly Products. Highly Recommend Their Service!",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Software engineer",
      date: "14 June 2025",
      avatar: "https://i.pravatar.cc/100?img=2",
      text: "I Recently Visited Wash & Go Car Wash And Was Really Impressed! The Staff Was Friendly And Quick, Ensuring My Car Was Spotless In No Time. They Offer Various Services, From A Quick Wash To Full Detailing, All At Reasonable Prices. Plus, The Waiting Area Is Comfy With Free Coffee. I Highly Recommend Them For A Car That Looks Brand New!",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>{"< Back"}</Text>
        </TouchableOpacity>

        {/* Top Image */}
        <Image
          source={require("../assets/imag4.png")}
          style={styles.packageImage}
          resizeMode="cover"
        />

        {/* Title & Subtitle */}
        <Text style={styles.title}>Exterior Wash</Text>
        <Text style={styles.subtitle}>
          Fast 30-min exterior cleaning with eco-friendly shampoo.
        </Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {options.map((item, idx) => {
            const isActive = selected === item.type;
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.optionCard, isActive && styles.optionActive]}
                onPress={() => setSelected(item.type)}
                activeOpacity={0.8}
              >
                <Text
                  style={[styles.optionType, !isActive && styles.disabledText]}
                >
                  {item.type}
                </Text>
                <Text
                  style={[
                    styles.optionDuration,
                    !isActive && styles.disabledText,
                  ]}
                >
                  {item.duration}
                </Text>
                <Text
                  style={[styles.optionPrice, !isActive && styles.disabledText]}
                >
                  {item.price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Footer Note */}
        <Text style={styles.note}>GST and Other Taxes Are Included!</Text>

        {/* Reviews */}
        <Text style={styles.sectionTitle}>Reviews</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image source={{ uri: review.avatar }} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <Text style={styles.reviewRole}>{review.role}</Text>
              </View>
              <Text style={styles.reviewDate}>🕒 {review.date}</Text>
            </View>
            <Text style={styles.reviewText}>{review.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Button */}
      <TouchableOpacity
        style={styles.bookBtn}
        onPress={() => navigation.navigate("Booking")}
      >
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExteriorWashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0D2E",
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 15,
  },
  backText: {
    color: "white",
    fontSize: 16,
  },
  packageImage: {
    width: "90%",
    height: 200,
    borderRadius: 15,
    alignSelf: "center",
    marginVertical: 15,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 15,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    marginLeft: 20,
    marginTop: 5,
  },
  optionsContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  optionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderRadius: 10,
    backgroundColor: "#1C2147",
    marginBottom: 15,
  },
  optionActive: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#2C315F",
  },
  optionType: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
  optionDuration: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  optionPrice: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
  },
  disabledText: {
    color: "gray",
    opacity: 0.5,
  },
  note: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  reviewCard: {
    backgroundColor: "#1C2147",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginRight: 12,
  },
  reviewName: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  reviewRole: {
    color: "gray",
    fontSize: 12,
  },
  reviewDate: {
    color: "gray",
    fontSize: 12,
  },
  reviewText: {
    color: "white",
    fontSize: 13,
    lineHeight: 18,
  },
  bookBtn: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  bookText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
