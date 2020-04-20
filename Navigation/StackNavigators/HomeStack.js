import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../../Components/List";
import Detail from "../../Components/Detail";
import Cart from "../../Components/Cart";
import { LIST, CART } from "../screenNames";
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator initialRouteName={LIST} screenOptions={screenOptions}>
      <Screen name={LIST} component={List} />
      <Screen name="Detail" component={Detail} />
      <Screen name={CART} component={Cart} options={{ headerShown: false }} />
    </Navigator>
  );
}
