import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootSiblingParent } from "react-native-root-siblings"; 
import { MyPager } from "./src/screens/MyPager";
import { HomeScreen } from "./src/screens/HomeScreen";

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState<boolean | null>(null);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const completed = await AsyncStorage.getItem("onboardingCompleted");
      setIsOnboardingCompleted(completed === "true");
    } catch (error) {
      console.error("Error checking onboarding status:", error);
      setIsOnboardingCompleted(false);
    }
  };

  const handleOnboardingComplete = () => {
    setIsOnboardingCompleted(true);
  };

  const handleBackToOnboarding = () => {
    AsyncStorage.removeItem("onboardingCompleted"); // 👈 optional: reset onboarding state in storage
    setIsOnboardingCompleted(false);
  };

  if (isOnboardingCompleted === null) {
    return null;
  }

  return (
    <RootSiblingParent>
      {isOnboardingCompleted ? (
        <HomeScreen onBackToOnboarding={handleBackToOnboarding} />
      ) : (
        <MyPager onComplete={handleOnboardingComplete} />
      )}
    </RootSiblingParent>
  );
}
