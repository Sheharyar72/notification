import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { PaginationDots } from "../components/PaginationDots";
import AntDesign from "@expo/vector-icons/AntDesign"; 

interface Pg2Props {
  page: number;
  onStartNow: () => void;
}

export const Pg2 = ({ page, onStartNow }: Pg2Props) => {
  return (
    <View style={globalStyles.page}>
      <Image source={require("../../assets/pg2.jpg")} style={globalStyles.image} />
      <PaginationDots page={page} />
      <Text style={globalStyles.title}>
        Do you want to find your place to stay easily?
      </Text>
      <Text style={globalStyles.subtitle}>
        Kease offers many options with various features to suit your needs.
      </Text>

      <TouchableOpacity style={globalStyles.startNowBtn} onPress={onStartNow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={globalStyles.startNowText}>Start Now</Text>
       
          <AntDesign
            name="right"
            size={12}
            color="#000"
            style={{ marginLeft: 6, textAlignVertical: "center" }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
