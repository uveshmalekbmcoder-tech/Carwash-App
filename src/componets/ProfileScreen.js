import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = ({ navigation }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    // 👉 Add your real logout logic (clear token, navigate to Login, etc.)
    navigation.replace("Login"); // Example: redirect to login screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Title */}
      <Text style={styles.header}>Profile</Text>

      {/* User Info */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/32.jpg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>
          Steven <Ionicons name="create-outline" size={16} color="white" />
        </Text>
        <Text style={styles.email}>steven@gmail.com</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Payment")}
        >
          <Ionicons name="card-outline" size={20} color="white" />
          <Text style={styles.menuText}>Payment Method</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="white"
            style={styles.arrow}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("HelpSupport")}
        >
          <Ionicons name="help-circle-outline" size={20} color="white" />
          <Text style={styles.menuText}>Help & Support</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="white"
            style={styles.arrow}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("TermsCondition")}
        >
          <MaterialIcons name="article" size={20} color="white" />
          <Text style={styles.menuText}>Terms And Conditions</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="white"
            style={styles.arrow}
          />
        </TouchableOpacity>

        {/* ✅ Logout with Modal */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => setShowLogoutModal(true)}
        >
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text style={styles.menuText}>Logout</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color="white"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent
        visible={showLogoutModal}
        animationType="slide"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomModalBox}>
            <Text style={styles.modalTitle}>
              Are You Sure You Want to Logout?
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => setShowLogoutModal(false)}>
                <Text style={styles.cancelBtn}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn} onPress={handleLogout}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0D2E",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
    marginTop: 40,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  email: {
    fontSize: 14,
    color: "lightgray",
    marginTop: 3,
  },
  menu: {
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C2147",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuText: {
    color: "white",
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  arrow: {
    marginLeft: "auto",
  },

  // 🔽 Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end", // 👈 push modal to bottom
    alignItems: "center",
  },
  bottomModalBox: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "center", // center both buttons
    alignItems: "center",
    gap: 20, // spacing between buttons (React Native >=0.71) 
    marginTop: 10,
  },
  cancelBtn: {
    fontSize: 16,
    color: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  confirmBtn: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  confirmText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
