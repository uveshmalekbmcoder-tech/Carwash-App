import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const ThirdOnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000224" />

            {/* Background */}
            <View style={styles.background}>
                <View style={styles.gradientTop} />
                <View style={styles.gradientBottom} />
            </View>

            {/* Large Car Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/third.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            {/* Content Section */}
            <View style={styles.content}>
                {/* Pagination Dots */}
                <View style={styles.dotsContainer}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={[styles.dot, styles.activeDot]} />
                </View>

                {/* Text Section */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Professional Service</Text>
                    <Text style={styles.subtitle}>
                        Trained staff, eco-friendly products, and spotless results.
                    </Text>
                </View>

                {/* Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
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
        backgroundColor: "#000224", // updated
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    gradientTop: {
        height: "45%",
        // you can add gradient lib later if needed
    },
    gradientBottom: {
        height: "55%",
        backgroundColor: "#000224", // updated
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    image: {
        width: width * 0.9,
        height: height * 0.4,
    },
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
        paddingHorizontal: 20,
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

export default ThirdOnboardingScreen;
