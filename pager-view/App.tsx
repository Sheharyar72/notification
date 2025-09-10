import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import MyPager from "./MyPager";

export default function App() {
  return (
    <RootSiblingParent>
      <MyPager />
    </RootSiblingParent>
  );
}
