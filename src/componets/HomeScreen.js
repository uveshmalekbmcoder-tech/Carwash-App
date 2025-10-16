import React, { useRef, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

// Local banners (add your downloaded images in assets folder)
const banners = [
    require("../assets/banaer.png"),
    require("../assets/banaer2.png"),
    require("../assets/banaer3.png"),
];

// Services icons
const services = [
    { name: "Exterior Wash", icon: "car-sport" },
    { name: "Interior Wash", icon: "brush" },
    { name: "Full Wash", icon: "water" },
    { name: "Premium Detailing", icon: "diamond" },
];

// Packages
const packages = [
    {
        id: 1,
        title: "Basic",
        description: "Quick shine for your car's exterior",
        price: "$19.99",
        image: require("../assets/imag1.png"), // replace with your local image
        details: "Includes exterior wash, wheel cleaning, and tire dressing",
        features: ["Exterior wash", "Wheel cleaning", "Tire dressing", "Window cleaning"]
    },
    {
        id: 2,
        title: "Standard",
        description: "Fresh look inside & outside",
        price: "$29.99",
        image: require("../assets/imag2.png"), // replace with your local image
        details: "Complete interior and exterior cleaning package",
        features: ["Exterior wash", "Interior vacuum", "Dashboard cleaning", "Window cleaning"]
    },
];

const HomeScreen = ({ navigation }) => {
    const scrollRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-scroll banner every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = (activeIndex + 1) % banners.length;
            scrollRef.current.scrollTo({ x: nextIndex * width, animated: true });
            setActiveIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handlePackagePress = (packageItem) => {
        // Navigate to PackageDetailsScreen with the package data
        navigation.navigate('PackageDetailsScreen', { package: packageItem });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0B0E2C" />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* 🔹 Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.locationLabel}>Location</Text>
                        <TouchableOpacity>
                            <Text style={styles.locationText}>📍 Select Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image
                            source={{ uri: "https://i.pravatar.cc/100" }}
                            style={styles.avatar}
                        />
                        <Ionicons
                            name="notifications-outline"
                            size={22}
                            color="#fff"
                            style={{ marginLeft: 10 }}
                        />
                    </View>
                </View>

                {/* 🔹 Search */}
                <View style={styles.searchWrapper}>
                    <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search Services"
                        placeholderTextColor="#888"
                        style={styles.searchInput}
                    />
                </View>

                {/* 🔹 Buy Packages */}
                <Text style={styles.sectionTitle}>Buy Packages</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
                    {packages.map((item) => (
                        <View key={item.id} style={styles.packageCard}>
                            {/* Left Image */}
                            <Image source={item.image} style={styles.packageImage} resizeMode="cover" />

                            {/* Right Content */}
                            <View style={styles.packageContent}>
                                <Text style={styles.packageTitle}>{item.title}</Text>
                                <Text style={styles.packageSubtitle}>{item.description}</Text>
                                <Text style={styles.packagePrice}>{item.price}</Text>
                                <TouchableOpacity
                                    style={styles.packageButton}
                                    onPress={() => navigation.navigate("PackageDetail", { packageData: item })}
                                >
                                    <Text style={styles.packageButtonText}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* 🔹 Banner Carousel */}
                <View style={styles.bannerContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        ref={scrollRef}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                    >
                        {banners.map((banner, index) => (
                            <Image
                                key={index}
                                source={banner}
                                style={styles.bannerImage}
                                resizeMode="contain"
                            />
                        ))}
                    </ScrollView>

                    {/* Dots */}
                    <View style={styles.dotsContainer}>
                        {banners.map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    styles.dot,
                                    { opacity: i === activeIndex ? 1 : 0.3 },
                                ]}
                            />
                        ))}
                    </View>
                </View>

                {/* 🔹 Services */}
                <Text style={styles.sectionTitle}>Services</Text>
                <View style={styles.servicesGrid}>
                    {services.map((item, index) => (
                        <View key={index} style={styles.serviceCard}>
                            <Ionicons name={item.icon} size={40} color="#0B0E2C" />
                            <Text style={styles.serviceText}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0E2C",
    },
    scrollContent: {
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    locationLabel: {
        fontSize: 12,
        color: "#aaa",
    },
    locationText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "600",
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    searchWrapper: {
        flexDirection: "row",
        backgroundColor: "#1E1E3F",
        borderRadius: 25,
        paddingHorizontal: 15,
        alignItems: "center",
        marginBottom: 25,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: "#fff",
        height: 40,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 15,
    },

    // 🔹 Packages
    packageCard: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 12,
        marginRight: 15,
        width: width - 100,
        alignItems: "center",
    },
    packageImage: {
        width: 70,
        height: 70,
        borderRadius: 12,
        marginRight: 12,
    },
    packageContent: {
        flex: 1,
    },
    packageTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#000",
    },
    packageSubtitle: {
        fontSize: 13,
        color: "#444",
        marginVertical: 4,
    },
    packagePrice: {
        fontSize: 16,
        fontWeight: "700",
        color: "#0B0E2C",
        marginBottom: 8,
    },
    packageButton: {
        backgroundColor: "#0B0E2C",
        paddingVertical: 6,
        borderRadius: 20,
        alignItems: "center",
        width: 80,
    },
    packageButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },

    // 🔹 Banner
    bannerContainer: {
        width: width,
        height: width * 9 / 16,
        marginVertical: 20,
    },
    bannerImage: {
        width: width - 40,
        height: (width - 40) * 9 / 16,
        borderRadius: 12,
        marginRight: 15,
    },
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom: 10,
        width: "100%",
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#FFD700",
        marginHorizontal: 4,
    },

    // 🔹 Services
    servicesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    serviceCard: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 15,
        alignItems: "center",
        marginBottom: 15,
    },
    serviceText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#000",
        textAlign: "center",
        marginTop: 8,
    },
});

export default HomeScreen;