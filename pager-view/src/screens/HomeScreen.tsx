import React from "react";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import Svg, { Rect, Circle, Path } from "react-native-svg";

const { height } = Dimensions.get("window");

type RootStackParamList = {
  Pg1: undefined;
  Pg2: undefined;
  Pg3: undefined;
  Pg4: undefined;
  MainTabs: undefined;
  SearchScreen: undefined;
};

// Custom SVG Icons
const HospitalIcon = ({ size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 64 64">
    <Rect x="12" y="20" width="40" height="32" fill="#fff" stroke="#000" strokeWidth="2"/>
    <Rect x="28" y="32" width="8" height="20" fill="#ccc" />
    <Rect x="18" y="24" width="8" height="8" fill="#f00" />
    <Rect x="38" y="24" width="8" height="8" fill="#f00" />
  </Svg>
);

const BuildingsIcon = ({ size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 64 64">
    <Rect x="8" y="24" width="12" height="32" fill="#ccc" stroke="#000" strokeWidth="1"/>
    <Rect x="24" y="16" width="12" height="40" fill="#fff" stroke="#000" strokeWidth="1"/>
    <Rect x="40" y="28" width="12" height="28" fill="#ddd" stroke="#000" strokeWidth="1"/>
  </Svg>
);

const RiyadhSeasonCircle = ({ size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100">
    <Circle cx="50" cy="50" r="45" fill="#ddd" />
    <Path d="M50 50 L50 5 A45 45 0 0 1 95 50 Z" fill="blue" />   {/* 60% Blue */}
    <Path d="M50 50 L95 50 A45 45 0 0 1 73 90 Z" fill="red" />  {/* 10% Red */}
    <Path d="M50 50 L73 90 A45 45 0 0 1 27 90 Z" fill="pink" /> {/* 10% Pink */}
    <Path d="M50 50 L27 90 A45 45 0 0 1 5 50 Z" fill="green" /> {/* 10% Green */}
  </Svg>
);

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = (name: string) => {
    Alert.alert(name, "You pressed " + name);
  };

  const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="default" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Top Section */}
        <View
          style={{
            backgroundColor: "black",
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 20,
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ position: "absolute", top: -25, left: 0 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={26} color="white" />
            </TouchableOpacity>

            <Text style={{ fontSize: 26, fontWeight: "bold", color: "white" }}>
              Kease
            </Text>

            <Ionicons name="notifications-outline" size={26} color="white" />
          </View>

          {/* Sub Heading */}
          <View style={{ marginTop: 15, alignItems: "center" }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              <Text style={{ fontWeight: "bold", color: "#FFA500" }}>Kease </Text>
              <Text style={{ color: "white" }}>Your first choice for </Text>
              <Text style={{ fontWeight: "bold", color: "#FFA500" }}>
                living in Riyadh
              </Text>
            </Text>
          </View>

          {/* Search Bar */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              marginTop: 20,
              paddingHorizontal: 10,
              height: 48,
              borderRadius: 8,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <Ionicons
              name="search"
              size={18}
              color="#555"
              style={{ marginRight: 6, marginTop: -2 }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: "#555" }}>
                Where to and when?
              </Text>
              <Text style={{ fontSize: 12, color: "#888", marginTop: 2 }}>
                Neighborhood, stay period, guests
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Nearby Section */}
        <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 160 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 22,
              textAlign: "left",
            }}
          >
            Nearby
          </Text>

          {/* Row of Local Icons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Medical Facilities */}
            <TouchableOpacity
              onPress={() => handlePress("Medical Facilities")}
              style={{ alignItems: "center" }}
            >
              <View
                style={[
                  { backgroundColor: "#f5f5f5", borderRadius: 60, padding: 16 },
                  shadowStyle,
                ]}
              >
                <HospitalIcon size={28} />
              </View>
              <Text
                style={{ marginTop: 10, fontSize: 12, textAlign: "center" }}
              >
                Medical{"\n"}Facilities
              </Text>
            </TouchableOpacity>

            {/* KAFD */}
            <TouchableOpacity
              onPress={() => handlePress("KAFD")}
              style={{ alignItems: "center" }}
            >
              <View
                style={[
                  { backgroundColor: "#f5f5f5", borderRadius: 60, padding: 16 },
                  shadowStyle,
                ]}
              >
                <BuildingsIcon size={28} />
              </View>
              <Text style={{ marginTop: 10, fontSize: 12 }}>KAFD</Text>
            </TouchableOpacity>

            {/* Riyadh Season */}
            <TouchableOpacity
              onPress={() => handlePress("Riyadh Season")}
              style={{ alignItems: "center" }}
            >
              <View
                style={[
                  { backgroundColor: "#f5f5f5", borderRadius: 60, padding: 16 },
                  shadowStyle,
                ]}
              >
                <RiyadhSeasonCircle size={28} />
              </View>
              <Text
                style={{ marginTop: 10, fontSize: 12, textAlign: "center" }}
              >
                Riyadh{"\n"}Season
              </Text>
            </TouchableOpacity>

            {/* Airport */}
            <TouchableOpacity
              onPress={() => handlePress("Airport")}
              style={{ alignItems: "center" }}
            >
              <View
                style={[
                  { backgroundColor: "#f5f5f5", borderRadius: 60, padding: 16 },
                  shadowStyle,
                ]}
              >
                <Ionicons name="airplane" size={26} color="#007ACC" />
              </View>
              <Text style={{ marginTop: 10, fontSize: 12 }}>Airport</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Extra space bottom so scroll looks natural */}
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
};
