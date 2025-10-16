import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from "react-native";

const LoginScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState("login");

    // Login/Register form states
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000224" />

            {/* Back Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                {/* <Text style={styles.backText}>{"<"} Back</Text> */}
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Sign in to Wash & Go</Text>
            <Text style={styles.subtitle}>
                Get your car sparkling clean in just a few taps.
            </Text>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "login" && styles.activeTab]}
                    onPress={() => setActiveTab("login")}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === "login" && styles.activeTabText,
                        ]}
                    >
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, activeTab === "register" && styles.activeTab]}
                    onPress={() => setActiveTab("register")}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === "register" && styles.activeTabText,
                        ]}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Form */}
            <View style={styles.form}>
                {activeTab === "register" && (
                    <>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Full Name"
                            placeholderTextColor="#888"
                            value={fullName}
                            onChangeText={setFullName}
                        />

                        <Text style={styles.label}>Phone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Phone"
                            placeholderTextColor="#888"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </>
                )}

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Password"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                {/* Forgot Password only on Login */}
                {activeTab === "login" && (
                    <TouchableOpacity
                        style={styles.forgotPassword}
                        onPress={() => navigation.navigate("Forgot")}
                    >
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Login/Register Button */}
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                    if (activeTab === "login") {
                        // 👉 handle login logic
                        console.log("Logging in with:", email, password);
                        navigation.navigate("HomeScreen");
                    } else {
                        // 👉 handle register logic
                        console.log("Registering with:", fullName, phone, email, password);
                        navigation.navigate("otpscreen");
                    }
                }}
            >
                <Text style={styles.loginButtonText}>
                    {activeTab === "login" ? "Login" : "Register"}
                </Text>
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
        marginBottom: 20,
    },
    backText: {
        color: "#fff",
        fontSize: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#aaa",
        textAlign: "center",
        marginBottom: 25,
    },
    tabContainer: {
        flexDirection: "row",
        backgroundColor: "#1E1E3F",
        borderRadius: 25,
        padding: 3,
        marginBottom: 25,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: "#fff",
    },
    tabText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#aaa",
    },
    activeTabText: {
        color: "#000",
    },
    form: {
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
    forgotPassword: {
        marginTop: 8,
        alignItems: "flex-end",
    },
    forgotPasswordText: {
        fontSize: 13,
        color: "#aaa",
        fontWeight: "600",
    },
    loginButton: {
        backgroundColor: "#fff",
        paddingVertical: 16,
        borderRadius: 25,
        alignItems: "center",
    },
    loginButtonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default LoginScreen;
