import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux";
import { Spinner } from "native-base";
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

// 

export default class App extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="#132D4B" />;
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}