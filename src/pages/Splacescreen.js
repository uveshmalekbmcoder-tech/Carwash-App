import React, { useEffect } from "react";
import { View, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding"); // Go to Home after 2s
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000224",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/logo1.png")}
        style={{ width: 499, height: 350 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
