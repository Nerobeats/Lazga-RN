import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CATEGORIES } from "../screenNames";
import Categories from "../../Components/Categories";
import screenOptions from "../screenOptions";
import Detail from "../../Components/Detail";
const { Navigator, Screen } = createStackNavigator();

export default function SearchStack() {
  return (
    <Navigator initialRouteName={CATEGORIES} screenOptions={screenOptions}>
      <Screen
        name={CATEGORIES}
        component={Categories}
        options={{ headerShown: false }}
      />
      <Screen
        name="Detail"
        component={Detail}
        options={({ route }) => {
          const { item } = route.params;
          return {
            title: item.name,
          };
        }}
      />
    </Navigator>
  );
}
