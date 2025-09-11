import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { globalStyles } from "../styles/globalstyle";

interface HomeScreenProps {
  onBackToOnboarding: () => void;
}

export const HomeScreen = ({ onBackToOnboarding }: HomeScreenProps) => {
  return (
    <View style={globalStyles.homeContainer}>
      
      <TouchableOpacity
        onPress={onBackToOnboarding}
        style={{ position: "absolute", top: 40, left: 20 }}
      >
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Text style={globalStyles.homeIcon}>🏠</Text>
      <Text style={globalStyles.homeText}>Welcome to HomeScreen</Text>
    </View>
  );
};
