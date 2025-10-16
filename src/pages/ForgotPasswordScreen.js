import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleForgot = () => {
        // Navigate to OTP Screen
        navigation.navigate("OtpScreen", { phone, email });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000224" />

            {/* Back Button with Arrow + Text */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backArrow}>←</Text>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Forgot Password</Text>

            {/* Email Input */}
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            {/* Phone Input */}
            <Text style={styles.label}>Phone</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Your Phone number"
                placeholderTextColor="#888"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />

            {/* Note */}
            <Text style={styles.note}>
                We’ll send you a 6-digit code to verify
            </Text>

            {/* Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("otpscreen", { phone, email })}
            >
                <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000224",
        padding: 20,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    backArrow: {
        fontSize: 28,
        color: "#fff",
        marginRight: 6,
    },
    backText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "500",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 30,
    },
    label: {
        color: "#fff",
        fontSize: 14,
        marginBottom: 6,
        marginTop: 12,
    },
    input: {
        backgroundColor: "#1E1E3F",
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
        color: "#fff",
    },
    note: {
        fontSize: 13,
        color: "#aaa",
        marginTop: 10,
        marginBottom: 30,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 16,
        borderRadius: 25,
        alignItems: "center",
    },
    buttonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ForgotPasswordScreen;
