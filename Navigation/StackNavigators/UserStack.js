import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { PROFILE } from "../screenNames";
import Profile from "../../Components/Profile";
import Signup from "./../../Components/Signup";
import Login from "./../../Components/Login";
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

function UserStack({ user }) {
  return (
    <Navigator initialRouteName={PROFILE} screenOptions={screenOptions}>
      {!user ? (
        <>
          <Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Screen name={PROFILE} component={Profile} />
        </>
      )}
    </Navigator>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps)(UserStack);
