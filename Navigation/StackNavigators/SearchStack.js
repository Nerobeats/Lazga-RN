import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CATEGORIES } from "../screenNames";
import Categories from "../../Components/Categories";
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function SearchStack() {
  return (
    <Navigator initialRouteName={CATEGORIES} screenOptions={screenOptions}>
      <Screen name={CATEGORIES} component={Categories} />
    </Navigator>
  );
}
