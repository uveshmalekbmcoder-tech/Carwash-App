import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack"; // ✅ import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Stack Screens
import SplashScreen from "./src/pages/Splacescreen";
import OnboardingScreen from "./src/pages/OnboardingScreen";
import SecondOnboardingScreen from "./src/pages/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./src/pages/ThirdOnboardingScreen";
import LoginScreen from "./src/pages/LoginScreen";
import ForgotPasswordScreen from "./src/pages/ForgotPasswordScreen";
import otpscreen from "./src/pages/OtpScreen";
import SuccessScreen from "./src/pages/SuccessScreen";
import CarDetailsScreen from "./src/pages/CarDetailsScreen";
import PackageDetailsScreen from "./src/componets/PackageDetailsScreen";
import ExteriorWashScreen from "./src/componets/ExteriorWashApp";
import BookingScreen from "./src/componets/BookingScreen";
import DropoffScreen from "./src/componets/DropOffLocationScreen";
import BookingSummary from "./src/componets/BookingSummary";
import PaymentMethodScreen from "./src/componets/PaymentMethodScreen";

// Tab Screens
import HomeScreen from "./src/componets/HomeScreen";
import Bookingtab from "./src/componets/Bookingtab";
import CarListScreen from "./src/componets/CarListScreen";
import ProfileScreen from "./src/componets/ProfileScreen";
import HelpSupportScreen from "./src/componets/HelpSupportScreen";
import TermsConditionsScreen from "./src/componets/TermsConditionsScreen";

// Tab icons
const homeIcon = require("./src/assets/home.png");
const bookingIcon = require("./src/assets/booking.png");
const addCarIcon = require("./src/assets/addcar.png");
const profileIcon = require("./src/assets/profile.png");

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2F2F4F",
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={homeIcon}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookingtab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={bookingIcon}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Car"
        component={CarListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={addCarIcon}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={profileIcon}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // ✅ smooth slide
        }}
      >
        {/* Stack screens */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Onboarding2" component={SecondOnboardingScreen} />
        <Stack.Screen name="Onboarding3" component={ThirdOnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="otpscreen" component={otpscreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />

        {/* Bottom Tabs */}
        <Stack.Screen name="HomeScreen" component={BottomTabs} />

        {/* Other screens */}
        <Stack.Screen name="PackageDetail" component={PackageDetailsScreen} />
        <Stack.Screen name="Exterior" component={ExteriorWashScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="DropOff" component={DropoffScreen} />
        <Stack.Screen name="BookingSummary" component={BookingSummary} />
        <Stack.Screen name="Payment" component={PaymentMethodScreen} />
        <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
        <Stack.Screen name="TermsCondition" component={TermsConditionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
