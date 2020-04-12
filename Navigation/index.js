import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "native-base";
// Screens
import Login from "../Componant/Login"
import Signup from "../Componant/Signup"
import List from "../Componant/List"
import Detail from "../Componant/Detail"


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
            <Screen
                name="List"
                component={List}
                options={({ navigation }) => ({
                    title: "Our Products",
                    headerRight: () => (
                        <Icon
                            name="shoppingcart"
                            type="AntDesign"
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
                        />
                    ),
                })}
            />
        </Navigator>
    );
}
export default RootNavigator;