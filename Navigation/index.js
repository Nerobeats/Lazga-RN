import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LIST, CATEGORIES, CART, PROFILE, FAV } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import CartStack from "./StackNavigators/CartStack";
import HomeStack from "./StackNavigators/HomeStack";
import SearchStack from "./StackNavigators/SearchStack";
import FavoritesStack from "./StackNavigators/FavoritesStack";
import Home from "../Components/Home"

const { Navigator, Screen } = createBottomTabNavigator();

function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#2d7fc0",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "white",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case LIST:
              iconName = "home";
              break;
            case CATEGORIES:
              iconName = "search";
              break;
            case CART:
              iconName = "cart";
              break;
            case PROFILE:
              iconName = "person";
              break;
            case FAV:
              iconName = "heart";
              break;
            default:
              return <Icon style={{ color }} />;
          }
          return <Icon name={iconName} style={{ color }} />;
        },
      })}
    >

      <Screen name={LIST} component={HomeStack} />
      <Screen name={CATEGORIES} component={SearchStack} />
      <Screen name={FAV} component={FavoritesStack} />
      <Screen name={CART} component={CartStack} />
      <Screen name={PROFILE} component={UserStack} />



    </Navigator>
  );
}

export default RootTabNavigator;
