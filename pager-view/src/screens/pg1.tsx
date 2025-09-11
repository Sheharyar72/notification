import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { PaginationDots } from "../components/PaginationDots";
import AntDesign from "@expo/vector-icons/AntDesign"; // ✅ AntDesign import

interface Pg1Props {
  page: number;
  onStartNow: () => void;
}

export const Pg1 = ({ page, onStartNow }: Pg1Props) => {
  return (
    <View style={globalStyles.page}>
      <Image source={require("../../assets/pg1.jpg")} style={globalStyles.image} />
      <PaginationDots page={page} />
      <Text style={globalStyles.title}>Are you planning to visit Riyadh?</Text>
      <Text style={globalStyles.subtitle}>
        Looking for a unit suitable for you or your family?
      </Text>

      <TouchableOpacity style={globalStyles.startNowBtn} onPress={onStartNow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={globalStyles.startNowText}>Start Now</Text>
          
          <AntDesign name="right" size={12} color ="black"style ={{marginLeft:4}}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
