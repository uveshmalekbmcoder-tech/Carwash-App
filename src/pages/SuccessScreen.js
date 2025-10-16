import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Animated,
  Easing,
  Image
} from "react-native";

const successIcon = require("../assets/Vector.png"); // Update this path

const SuccessScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.elastic(1.2),
      useNativeDriver: true
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
      delay: 300
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000224" />
      
      <View style={styles.content}>
        {/* ✅ Only the vector icon */}
        <Animated.View 
          style={[
            styles.iconContainer,
            { transform: [{ scale: scaleAnim }] }
          ]}
        >
          <Image
            source={successIcon}
            style={styles.successIcon}
            resizeMode="contain"
          />
        </Animated.View>
        
        {/* Success Message */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.successTitle}>Successful</Text>
          <Text style={styles.successMessage}>
            Your OTP Verification is Successful
          </Text>
        </Animated.View>
        
        {/* Continue Button */}
        <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate("CarDetailsScreen")}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000224",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  iconContainer: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  successIcon: {
    width: 100,
    height: 100,
    // ❌ no tint, no bg, original image only
  },
  successTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  successMessage: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.85)",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 26,
    fontWeight: "500",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  continueButtonText: {
    color: "#000224",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});

export default SuccessScreen;
