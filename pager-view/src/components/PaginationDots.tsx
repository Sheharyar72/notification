import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { Ionicons } from "@expo/vector-icons"; 

interface PaginationDotsProps {
  page: number;
}

export const PaginationDots = ({ page }: PaginationDotsProps) => (
  <View style={globalStyles.dotsContainer}>
    
    <Ionicons name="chevron-back" size={18} color="#000" style={{ marginHorizontal: 3}} />

    
    {[0, 1, 2, 3].map((i) => (
      <View
        key={i}
        style={[
          globalStyles.dot,
          page === i && globalStyles.activeDot
        ]}
      />
    ))}

    
    <Ionicons name="chevron-forward" size={18} color="#000" style={{ marginHorizontal: 3 }} />
  </View>
);
