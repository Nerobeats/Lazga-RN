import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../../Components/Cart";
import screenOptions from "../screenOptions";
import { CART } from "./../screenNames";
import Signup from "./../../Components/Signup";
import Login from "./../../Components/Login";
const { Navigator, Screen } = createStackNavigator();

export default function CartStack() {
  return (
    <Navigator initialRouteName={CART} screenOptions={screenOptions}>
      <Screen name={CART} component={Cart} />
      <Screen
        name={"Signup"}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
}
