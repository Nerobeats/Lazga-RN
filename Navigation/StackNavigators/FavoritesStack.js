import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import screenOptions from "../screenOptions";

import Favorite from "./../../Components/Favorite";

const { Navigator, Screen } = createStackNavigator();

export default function CartStack() {
    return (
        <Navigator initialRouteName="Favorites" screenOptions={screenOptions}>
            <Screen name="Favorites" component={Favorite} options={{ headerShown: false }} />
        </Navigator>
    );
}
