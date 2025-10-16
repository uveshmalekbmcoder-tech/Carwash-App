import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00072D" />

      {/* Background with gradient effect */}
      <View style={styles.background}>
        <View style={styles.gradientTop} />
        <View style={styles.gradientBottom} />
      </View>

      {/* Car with custom background shape */}
      <View style={styles.imageWrapper}>
        <View style={styles.carBackground} />
        <Image
          source={require("../assets/Onboarding.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to Wash & Go</Text>
          <Text style={styles.subtitle}>
            Car cleaning made simple{"\n"}Anytime Anywhere.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding2")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00072D",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  gradientTop: {
    height: "45%",
  },
  gradientBottom: {
    height: "55%",
    backgroundColor: "#00072D",
  },

  // Car with background blob
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  carBackground: {
    position: "absolute",
    width: width * 0.9,
    height: height * 0.48,
    backgroundColor: "#0A0D2E", // dark navy
    borderRadius: 200, // rounded shape
    transform: [{ scaleX: 1.1 }, { scaleY: 1.05 }], // stretched blob look
  },
  image: {
    width: width * 0.85,
    height: height * 0.45,
  },

  // Content
  content: {
    flex: 0.5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1E3A8A",
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#3B82F6",
    width: 20,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    color: "#BFDBFE",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 26,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
});

export default OnboardingScreen;
