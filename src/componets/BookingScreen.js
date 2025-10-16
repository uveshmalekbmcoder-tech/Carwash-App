import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
} from "react-native";

const BookingScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState("Wed 7");
    const [selectedTime, setSelectedTime] = useState("12:00 am - 02:00 pm");

    const dates = [
        { day: "Sun", date: "4" },
        { day: "Mon", date: "5" },
        { day: "Tue", date: "6" },
        { day: "Wed", date: "7" },
        { day: "Thu", date: "8" },
        { day: "Fri", date: "9" },
        { day: "Sat", date: "10" },
    ];

    const times = [
        "09:00 am - 12:00 pm",
        "12:00 am - 02:00 pm",
        "02:00 pm - 05:00 pm",
        "05:00 pm - 08:00 pm",
        "09:00 pm - 10:15 pm",
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }} // ✅ prevents overlap with Book button
            >
                {/* Back */}
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backText}>{"< Back"}</Text>
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.title}>Exterior Wash</Text>
                <Text style={styles.subtitle}>
                    Fast 30-min exterior cleaning with eco-friendly shampoo.
                </Text>

                {/* Car Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Car Details</Text>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Brand</Text>
                        <Text style={styles.detailValue}>BMW</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Car Model</Text>
                        <Text style={styles.detailValue}>BMW 1 Series</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Vehicle Number</Text>
                        <Text style={styles.detailValue}>ABC 1234</Text>
                    </View>
                    <TouchableOpacity style={styles.changeCarBtn}>
                        <Text style={styles.changeCarText}>Change Car</Text>
                    </TouchableOpacity>
                </View>

                {/* Date */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Date</Text>
                    <Text style={styles.subGray}>July</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dates}
                        keyExtractor={(item) => item.day + item.date}
                        renderItem={({ item }) => {
                            const isActive = selectedDate === `${item.day} ${item.date}`;
                            return (
                                <TouchableOpacity
                                    style={[styles.dateBox, isActive && styles.dateActive]}
                                    onPress={() => setSelectedDate(`${item.day} ${item.date}`)}
                                >
                                    <Text
                                        style={[
                                            styles.dateDay,
                                            isActive && styles.dateDayActive,
                                        ]}
                                    >
                                        {item.day}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.dateNumber,
                                            isActive && styles.dateNumberActive,
                                        ]}
                                    >
                                        {item.date}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                {/* Time */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Time</Text>
                    <Text style={styles.subGray}>9 am - 9 pm</Text>

                    <FlatList
                        data={times}
                        keyExtractor={(item) => item}
                        numColumns={2} // 2 column layout
                        columnWrapperStyle={{ justifyContent: "space-between" }}
                        renderItem={({ item }) => {
                            const isActive = selectedTime === item;
                            return (
                                <TouchableOpacity
                                    style={[styles.timeBox, isActive && styles.timeActive]}
                                    onPress={() => setSelectedTime(item)}
                                >
                                    <Text
                                        style={[styles.timeText, isActive && styles.timeTextActive]}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </ScrollView>

            {/* Book Now Button */}
            <TouchableOpacity
                style={styles.bookBtn}
                onPress={() => navigation.navigate("DropOff")}
            >
                <Text style={styles.bookText}>Book Now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default BookingScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#0A0D2E" },
    backBtn: { marginTop: 10, marginLeft: 15 },
    backText: { color: "white", fontSize: 16 },
    title: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 15,
    },
    subtitle: { color: "gray", fontSize: 14, marginLeft: 20, marginTop: 5 },
    section: { margin: 20 },
    sectionTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    detailLabel: { color: "gray", fontSize: 14 },
    detailValue: { color: "white", fontSize: 14 },
    changeCarBtn: {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
    },
    changeCarText: { color: "#000000", fontWeight: "bold" },
    subGray: { color: "gray", marginBottom: 10 },
    dateBox: {
        backgroundColor: "#1C2147",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    dateActive: { backgroundColor: "#FFFFFF" },
    dateDay: { color: "gray", fontSize: 12 },
    dateDayActive: { color: "#000000", fontWeight: "bold" },
    dateNumber: { color: "white", fontSize: 16, fontWeight: "bold" },
    dateNumberActive: { color: "#000000" },

    /** TIME BOX STYLE **/
    timeBox: {
        flex: 1,
        paddingVertical: 14,
        margin: 6,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
    timeActive: {
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
    },
    timeText: { color: "gray", fontSize: 14 },
    timeTextActive: { color: "black", fontWeight: "bold" },

    bookBtn: {
        backgroundColor: "#FFFFFF",
        padding: 18,
        borderRadius: 30,
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },
    bookText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});
