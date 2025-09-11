import React, { useRef } from "react";
import { View, Text, Image, PanResponder, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import Toast from "react-native-toast-message"; // 👈 Toast import
import { globalStyles } from "../styles/globalstyle";
import { PaginationDots } from "../components/PaginationDots";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width } = Dimensions.get("window");

interface Pg4Props {
  page: number;
  onSwipeComplete: () => void;
}

export const Pg4 = ({ page, onSwipeComplete }: Pg4Props) => {
  const swipeX = useSharedValue(0);
  const shadow = useSharedValue(2);

  const showToasts = () => {
    // ✅ Bottom Toast
    Toast.show({
      type: "info",
      text1: "Welcome to Kease",
      position: "bottom",
    });

    // ✅ Top Toast
    Toast.show({
      type: "success",
      text1: "Successfully",
      text2: "Action completed successfully",
      position: "top",
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dx >= 0 && gesture.dx <= width * 0.85 - 70) {
          swipeX.value = gesture.dx;
          shadow.value = withSpring(10);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > width * 0.5) {
          swipeX.value = withTiming(width * 0.85 - 70, { duration: 200 }, () => {
            runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);

            // ✅ Run Toasts
            runOnJS(showToasts)();

            // ✅ Call navigation handler
            runOnJS(onSwipeComplete)();

            // Reset values
            swipeX.value = withSpring(0, {
              damping: 15,
              stiffness: 120,
              mass: 0.5,
            });
            shadow.value = withSpring(2);
          });
        } else {
          swipeX.value = withSpring(0, {
            damping: 15,
            stiffness: 120,
            mass: 0.5,
          });
          shadow.value = withSpring(2);
        }
      },
    })
  ).current;

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: swipeX.value }],
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: shadow.value,
    elevation: shadow.value,
  }));

  const bgStyle = useAnimatedStyle(() => {
    const progress = swipeX.value / (width * 0.85 - 70);
    return {
      backgroundColor: `rgba(240, 98, 93, ${0.3 + progress * 0.7})`,
      borderColor: "#f0625d",
      borderWidth: 2,
    };
  });

  return (
    <View style={globalStyles.page}>
      <Image source={require("../../assets/pg4.jpg")} style={globalStyles.image} />
      
      {/* ✅ Pagination dots ab bhi sahi kaam karenge */}
      <PaginationDots page={page} />

      <Text style={globalStyles.title}>Book your unit in just a few steps</Text>
      <Text style={globalStyles.subtitle}>
        You can easily and securely book your unit and complete the payment
        process.
      </Text>

      <View style={globalStyles.swipeWrapper}>
        <Animated.View style={[globalStyles.swipeContainer, bgStyle]}>
          <Animated.View
            style={[globalStyles.swipeThumb, thumbStyle]}
            {...panResponder.panHandlers}
          >
            <AntDesign name="doubleright" size={22} color="red" />
          </Animated.View>
          <Text style={globalStyles.swipeText}>Swipe to get started</Text>
        </Animated.View>
      </View>
    </View>
  );
};
