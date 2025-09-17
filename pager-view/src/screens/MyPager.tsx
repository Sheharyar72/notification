import React, { useRef, useState, useEffect } from "react";
import { View, StatusBar, Text } from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/globalstyle";
import { RootSiblingParent } from "react-native-root-siblings";
import { Pg1 } from "./pg1";
import { Pg2 } from "./pg2";
import { Pg3 } from "./pg3";
import { Pg4 } from "./pg4";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";  // 👈 import RootStackParamList from App.tsx

export default function OnboardingWrapper() {
  return (
    <RootSiblingParent>
      <MyPager />
    </RootSiblingParent>
  );
}

type NavigationProp = StackNavigationProp<RootStackParamList, "Onboarding">;

export const MyPager = () => {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState<number>(0);
  const [showToast, setShowToast] = useState<"welcome" | "success" | null>(null);

  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    let toast: any;
    if (showToast === "welcome") {
      toast = Toast.show("Welcome to Kease👋", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
      });

      const timer = setTimeout(() => {
        Toast.hide(toast);
        setShowToast("success");
      }, 1500);

      return () => clearTimeout(timer);
    }

    if (showToast === "success") {
      toast = Toast.show(
        <View>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "#000000" }}>
            Successfully
          </Text>
          <Text style={{ fontSize: 12, color: "#333333", marginTop: 4 }}>
            You’re all set to continue
          </Text>
        </View>,
        {
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          backgroundColor: "#ffffff",
          opacity: 0.8,
          containerStyle: {
            backgroundColor: "#fff",
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 6,
            flexDirection: "column",
            alignItems: "flex-start",
            minHeight: 55,
            borderLeftWidth: 6,
            borderLeftColor: "#4CAF50",
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 2 },
            elevation: 3,
          },
        }
      );

      const timer = setTimeout(() => {
        Toast.hide(toast);
        setShowToast(null);

        AsyncStorage.setItem("onboardingCompleted", "true");

        // 👇 Navigate to Home after onboarding complete
        navigation.replace("Home");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showToast, navigation]);

  const handleStartNow = () => {
    if (pagerRef.current) {
      pagerRef.current.setPage(3);
    }
  };

  const handleSwipeComplete = () => {
    console.log("Swipe Done! ✅");
    setShowToast("welcome");
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="default" backgroundColor="black" />

      <PagerView
        style={globalStyles.container}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e: PagerViewOnPageSelectedEvent) =>
          setPage(e.nativeEvent.position)
        }
      >
        <View key="1">
          <Pg1 page={page} onStartNow={handleStartNow} />
        </View>

        <View key="2">
          <Pg2 page={page} onStartNow={handleStartNow} />
        </View>

        <View key="3">
          <Pg3 page={page} onStartNow={handleStartNow} />
        </View>

        <View key="4">
          <Pg4 page={page} onSwipeComplete={handleSwipeComplete} />
        </View>
      </PagerView>
    </View>
  );
};
