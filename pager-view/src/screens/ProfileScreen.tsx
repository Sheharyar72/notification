// screens/ProfileScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", paddingTop: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Profile
      </Text>

      <View style={{ marginTop: 20, width: "90%" }}>
        {/* Login box */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            padding: 14,
            borderWidth: 1,
            borderColor: "#eee",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="person" size={20} color="yellow" />
            <Text style={{ fontSize: 16, color: "black" }}> Login</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        {/* Change language */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            paddingVertical: 12,
            paddingHorizontal: 14,
            borderWidth: 1,
            borderColor: "#eee",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="language" size={20} color="#444" />
            <Text style={{ fontSize: 16, color: "black" }}> Change language</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        {/* Information */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            padding: 14,
            borderWidth: 1,
            borderColor: "#eee",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: "yellow",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>!</Text>
            </View>
            <Text style={{ fontSize: 16, color: "black", marginLeft: 6 }}>
              Information
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
