import React from "react";
import { View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Pg1: undefined;
  Pg2: undefined;
  Pg3: undefined;
  Pg4: undefined;
};

interface PaginationDotsProps {
  page: number;
}

export const PaginationDots = ({ page }: PaginationDotsProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToPage = (target: number) => {
    if (target === 1) navigation.navigate("Pg1");
    if (target === 2) navigation.navigate("Pg2");
    if (target === 3) navigation.navigate("Pg3");
    if (target === 4) navigation.navigate("Pg4");
  };

  return (
    <View style={globalStyles.dotsContainer}>
      {/* 👈 Back Arrow */}
      <TouchableOpacity
        onPress={() => page > 1 && goToPage(page - 1)}
        disabled={page === 1} // disable on first page
      >
        <Ionicons
          name="chevron-back"
          size={22}
          color={page === 1 ? "#ccc" : "#000"} // greyed out if disabled
          style={{ marginHorizontal: 6 }}
        />
      </TouchableOpacity>

      {/* 🔘 Dots */}
      {[1, 2, 3, 4].map((i) => (
        <TouchableOpacity key={i} onPress={() => goToPage(i)}>
          <View
            style={[
              globalStyles.dot,
              page === i && globalStyles.activeDot,
            ]}
          />
        </TouchableOpacity>
      ))}

      {/* 👉 Forward Arrow */}
      <TouchableOpacity
        onPress={() => page < 4 && goToPage(page + 1)}
        disabled={page === 4} // disable on last page
      >
        <Ionicons
          name="chevron-forward"
          size={22}
          color={page === 4 ? "#ccc" : "#000"}
          style={{ marginHorizontal: 6 }}
        />
      </TouchableOpacity>
    </View>
  );
};
