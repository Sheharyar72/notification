import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { PaginationDots } from "../components/PaginationDots";

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
        <Text style={globalStyles.startNowText}>Start Now   &gt;</Text>
      </TouchableOpacity>
    </View>
  );
};
