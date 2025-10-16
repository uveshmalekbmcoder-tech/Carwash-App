import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const PackageDetailsScreen = ({ navigation }) => {
    const packageData = {
        name: "Basic",
        description: "Affordable and quick cleaning options.",
        services: [
            { title: "Exterior Wash", items: ["Body shampoo wash", "Tires", "Windows"] },
            { title: "Interior Clean", items: ["Vacuum seats", "Mats", "Dashboard", "Boot", "Glass"] },
        ],
        price: 10,
    };

    return (
        <View style={styles.container}>
            {/* Floating Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={22} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Package Details</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Card */}
                <View style={styles.card}>
                    <Image
                        source={require("../assets/imag4.png")}
                        style={styles.packageImage}
                        resizeMode="cover"
                    />

                    <View style={styles.content}>
                        <Text style={styles.title}>{packageData.name}</Text>
                        <Text style={styles.description}>{packageData.description}</Text>

                        {packageData.services.map((service, idx) => (
                            <View key={idx} style={styles.serviceSection}>
                                <Text style={styles.serviceTitle}>{service.title}</Text>
                                {service.items.map((item, i) => (
                                    <Text key={i} style={styles.serviceItem}>
                                        • {item}
                                    </Text>
                                ))}
                            </View>
                        ))}

                        <Text style={styles.priceTitle}>Price</Text>
                        <Text style={styles.price}>
                            ${packageData.price}{" "}
                            <Text style={styles.priceNote}>
                                minimum Price (Based on car type)
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.bookButton}
                    onPress={() => navigation.navigate("Exterior")}
                >
                    <Text style={styles.bookText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PackageDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#020024",
    },
    header: {
        position: "absolute",
        top: 40,
        left: 16,
        right: 16,
        zIndex: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.2)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 20,
        margin: 16,
        overflow: "hidden",
        elevation: 6,
    },
    packageImage: {
        width: "100%",
        height: 220,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 6,
        color: "#000",
    },
    description: {
        fontSize: 15,
        color: "#666",
        marginBottom: 14,
        lineHeight: 20,
    },
    serviceSection: {
        marginBottom: 12,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
        color: "#000",
    },
    serviceItem: {
        fontSize: 14,
        color: "#444",
        marginLeft: 12,
        marginBottom: 2,
    },
    priceTitle: {
        fontSize: 17,
        fontWeight: "700",
        marginTop: 18,
        marginBottom: 6,
        color: "#000",
    },
    price: {
        fontSize: 20,
        fontWeight: "700",
        color: "#020024",
    },
    priceNote: {
        fontSize: 13,
        fontWeight: "400",
        color: "#666",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: "#020024",
    },
    bookButton: {
        backgroundColor: "#fff",
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        elevation: 4,
    },
    bookText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#020024",
    },
});
