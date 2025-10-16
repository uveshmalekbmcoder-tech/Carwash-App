import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // ✅ import navigation hook
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PaymentMethodScreen = () => {
    const navigation = useNavigation(); // ✅ now navigation works
    const [selected, setSelected] = useState("Cash");
    const [showSuccess, setShowSuccess] = useState(false);

    const methods = [
        { id: "Card", label: "Card", icon: <Ionicons name="card-outline" size={22} color="white" /> },
        { id: "GooglePay", label: "Google Pay", icon: <Ionicons name="logo-google" size={22} color="white" /> },
        { id: "Paypal", label: "Paypal", icon: <FontAwesome name="paypal" size={22} color="white" /> },
        { id: "ApplePay", label: "Apple Pay", icon: <Ionicons name="logo-apple" size={22} color="white" /> },
        { id: "Cash", label: "Cash", icon: <MaterialCommunityIcons name="cash" size={22} color="white" /> },
    ];

    if (showSuccess) {
        // ✅ Payment Success Screen
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.successContainer}>
                    <View style={styles.successIcon}>
                        <Ionicons name="checkmark" size={40} color="#0A0D2E" />
                    </View>
                    <Text style={styles.successTitle}>Payment Successful</Text>
                    <Text style={styles.successSubtitle}>
                        Your Payment to Wash & Go is completed
                    </Text>
                </View>

                {/* Continue Button → Go to Bookings tab */}
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() => navigation.navigate("HomeScreen", { screen: "Bookings" })}
                >
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    // ✅ Payment Method Screen
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>{"< Back"}</Text>
                </TouchableOpacity>

                {/* Payment Options */}
                {methods.map((method) => (
                    <TouchableOpacity
                        key={method.id}
                        style={[
                            styles.option,
                            selected === method.id && styles.selectedOption,
                        ]}
                        onPress={() => setSelected(method.id)}
                    >
                        <View style={styles.optionContent}>
                            {method.icon}
                            <Text style={styles.optionLabel}>{method.label}</Text>
                        </View>
                        <View
                            style={[
                                styles.radio,
                                selected === method.id && styles.radioSelected,
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Continue Button → Show Success */}
            <TouchableOpacity
                style={styles.continueBtn}
                onPress={() => setShowSuccess(true)}
            >
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#0A0D2E" },
    backBtn: { marginTop: 10, marginLeft: 15, marginBottom: 15 },
    backText: { color: "white", fontSize: 16 },

    // Payment Options
    option: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1C2147",
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 20,
        marginBottom: 12,
    },
    selectedOption: {
        borderColor: "#6C63FF",
        borderWidth: 1,
    },
    optionContent: { flexDirection: "row", alignItems: "center" },
    optionLabel: {
        color: "white",
        fontSize: 16,
        marginLeft: 12,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "gray",
    },
    radioSelected: {
        borderColor: "#6C63FF",
        backgroundColor: "#6C63FF",
    },

    // Continue Button
    continueBtn: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 30,
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },
    continueText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },

    // Success Screen
    successContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    successIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    successTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 8,
    },
    successSubtitle: {
        fontSize: 14,
        color: "gray",
        textAlign: "center",
        marginHorizontal: 40,
    },
});
