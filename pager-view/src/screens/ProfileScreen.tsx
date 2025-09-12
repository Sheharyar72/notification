import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
    
      <StatusBar barStyle="default" />

      
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        Profile
      </Text>

      <View style={{ marginTop: 20, width: "92%", alignSelf: "center" }}>
        
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            padding: 16,
            marginBottom: 14,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="person-circle-outline" size={40} color="#F9A825" />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
              Login
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#999" />
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            padding: 16,
            marginBottom: 14,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="language" size={28} color="#F9A825" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>
              Change language
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#F9A825" }}>
            EN
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="information-circle" size={28} color="#F9A825" />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Information</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#999" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

