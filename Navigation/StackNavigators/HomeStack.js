import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../../Components/List";
import Detail from "../../Components/Detail";
import Home from "../../Components/Home";
import Cart from "../../Components/Cart";
import { LIST, CART } from "../screenNames";
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator initialRouteName={LIST} screenOptions={screenOptions}>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name={LIST} component={List} options={{ title: "Trending items" }} />
      <Screen name="Detail" component={Detail}
        options={({ route }) => {
          const { item } = route.params;
          return {
            title: item.name,
          }
        }} />
      <Screen name={CART} component={Cart} options={{ headerShown: false }} />
    </Navigator>
  );
}
