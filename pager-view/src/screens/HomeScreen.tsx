// screens/HomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

const { height } = Dimensions.get("window");

type RootStackParamList = {
  Pg1: undefined;
  Pg2: undefined;
  Pg3: undefined;
  Pg4: undefined;
  MainTabs: undefined;
};

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="default" />

      {/* Top Section */}
      <View
        style={{
          height: height * 0.35,
          backgroundColor: "black",
          paddingHorizontal: 20,
          paddingTop: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* 🔙 Back Arrow */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>

          <Text style={{ fontSize: 26, fontWeight: "bold", color: "white" }}>
            Kease
          </Text>

          <Ionicons name="notifications-outline" size={28} color="white" />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16 }}>
            <Text style={{ color: "yellow", fontWeight: "bold" }}>Kease </Text>
            <Text style={{ color: "white" }}>your first choice for </Text>
            <Text style={{ color: "yellow", fontWeight: "bold" }}>
              living in Riyadh
            </Text>
          </Text>
        </View>

        {/* Search */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 25,
            marginTop: 20,
            paddingHorizontal: 15,
            height: 45,
          }}
        >
          <Ionicons
            name="search"
            size={20}
            color="black"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#999"
            style={{ flex: 1, fontSize: 14, color: "black" }}
          />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: "white" }} />
    </View>
  );
};
