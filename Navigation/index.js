import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "native-base";
// Screens
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import List from "../Components/List";
import Detail from "../Components/Detail";
import Categories from "../Components/Categories";
import Cart from "../Components/Cart";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Categories" component={Categories} />
      <Screen name="Cart" component={Cart} />
      <Screen
        name="List"
        component={List}
        options={({ navigation }) => ({
          title: "Our Products",
          headerRight: () => (
            <Icon
              name="shoppingcart"
              type="AntDesign"
              onPress={() => navigation.navigate("Cart")}
            />
          ),
        })}
      />
      <Screen
        name="Detail"
        component={Detail}
        options={({ navigation }) => ({
          title: "Our Products",
          headerRight: () => (
            <Icon
              name="shoppingcart"
              type="AntDesign"
              onPress={() => navigation.navigate("Cart")}
            />
          ),
        })}
      />
    </Navigator>
  );
}
export default RootNavigator;
