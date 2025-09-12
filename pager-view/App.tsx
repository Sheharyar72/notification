import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { OnboardingNavigator } from "./src/navigation/OnboardingNavigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
      <Toast /> 
    </NavigationContainer>
  );
}
