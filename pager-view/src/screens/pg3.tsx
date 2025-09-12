import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { PaginationDots } from "../components/PaginationDots";
import AntDesign from "@expo/vector-icons/AntDesign"; 

interface Pg3Props {
  page: number;
  onStartNow: () => void;
}

export const Pg3 = ({ page, onStartNow }: Pg3Props) => {
  return (
    <View style={globalStyles.page}>
      <Image source={require("../../assets/pg3.jpg")} style={globalStyles.image} />
      <PaginationDots page={page} />
      <Text style={globalStyles.title}>All you need to know about Kease units</Text>
      <Text style={globalStyles.subtitle}>
        All details with photos, including specifications, amenities,
        number of occupants, and location.
      </Text>

      <TouchableOpacity style={globalStyles.startNowBtn} onPress={onStartNow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={globalStyles.startNowText}>Start Now</Text>
          
          <AntDesign
            name="right"
            size={12}
            color="#000"
            style={{ marginLeft: 6 , textAlignVertical: "center"}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
