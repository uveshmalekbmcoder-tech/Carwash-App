import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";

const OtpScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState(["", "", "", ""]); // 4 digits

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    const finalOtp = otp.join("");
    console.log("Entered OTP:", finalOtp);
    // You can add validation here
    navigation.navigate("Home"); // Example
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000224" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Verify your number</Text>
        <Text style={styles.subtitle}>
          We've sent a 6-digit code to {route.params?.phone || "+91 XXXXX XXXXX"}
        </Text>

        {/* OTP Input */}
        <Text style={styles.label}>Enter OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        {/* Resend OTP */}
        <Text style={styles.resend}>
          Didn't get it?{" "}
          <Text style={styles.resendLink} onPress={() => console.log("Resend OTP")}>
            Resend OTP
          </Text>
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SuccessScreen")}>
          <Text style={styles.buttonText}>Verify & Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000224",
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60, // Added extra padding at the top
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  backArrow: {
    fontSize: 22,
    color: "#fff",
    marginRight: 5,
  },
  backText: {
    fontSize: 16,
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 12,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    backgroundColor: "#1E1E3F",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    width: 60,
    height: 60,
  },
  resend: {
    color: "#aaa",
    fontSize: 13,
    textAlign: "right",
    marginBottom: 40,
  },
  resendLink: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OtpScreen;