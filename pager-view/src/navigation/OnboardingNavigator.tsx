// navigation/OnboardingNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pg1 } from "../screens/pg1";
import { Pg2 } from "../screens/pg2";
import { Pg3 } from "../screens/pg3";
import { Pg4 } from "../screens/pg4";
import { MainTabs } from "./MainTabs";

export type RootStackParamList = {
  Pg1: undefined;
  Pg2: undefined;
  Pg3: undefined;
  Pg4: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Pg1"
        children={(props) => (
          <Pg1
            {...props}
            page={1}
            onStartNow={() => props.navigation.navigate("Pg2")}
          />
        )}
      />
      <Stack.Screen
        name="Pg2"
        children={(props) => (
          <Pg2
            {...props}
            page={2}
            onStartNow={() => props.navigation.navigate("Pg3")}
          />
        )}
      />
      <Stack.Screen
        name="Pg3"
        children={(props) => (
          <Pg3
            {...props}
            page={3}
            onStartNow={() => props.navigation.navigate("Pg4")}
          />
        )}
      />
      <Stack.Screen
        name="Pg4"
        children={(props) => (
          <Pg4
            {...props}
            page={4}
            onSwipeComplete={() => props.navigation.replace("MainTabs")}
          />
        )}
      />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};
