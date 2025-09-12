import React from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { PaginationDots } from "../components/PaginationDots";
import AntDesign from "@expo/vector-icons/AntDesign"; 

interface Pg1Props {
  page: number;
  onStartNow: () => void;
}

export const Pg1 = ({ page, onStartNow }: Pg1Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* StatusBar default */}
      <StatusBar barStyle="default" />

      <View style={globalStyles.page}>
        <Image source={require("../../assets/pg1.jpg")} style={globalStyles.image} />

        {/* Pagination */}
        <PaginationDots page={page} />

        <Text style={globalStyles.title}>Are you planning to visit Riyadh?</Text>
        <Text style={globalStyles.subtitle}>
          Looking for a unit suitable for you or your family?
        </Text>

        {/* Centered Start Now button */}
        <TouchableOpacity style={[globalStyles.startNowBtn, { alignSelf: "center" }]} onPress={onStartNow}>
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
    </SafeAreaView>
  );
};
