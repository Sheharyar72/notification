// screens/BookingsScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const BookingsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", paddingTop: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Your Bookings
      </Text>

      {/* Images placeholder */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View
          style={{
            width: width * 0.32,
            height: width * 0.55,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#ddd",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          <Text style={{ color: "#999" }}>Mobile</Text>
        </View>
        <View
          style={{
            width: width * 0.28,
            height: width * 0.55,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#ddd",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#999" }}>Person</Text>
        </View>
      </View>

      <Text style={{ fontSize: 14, fontWeight: "bold", color: "black", marginTop: 20 }}>
        You should sign in first
      </Text>
      <Text style={{ color: "#444", fontSize: 13, textAlign: "center", marginTop: 8 }}>
        Sign in to complete the payment process
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#333",
          paddingVertical: 12,
          paddingHorizontal: 36,
          borderRadius: 8,
          marginTop: 18,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
