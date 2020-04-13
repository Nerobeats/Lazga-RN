import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  H1,
  Text,
} from "native-base";
import { Image } from "react-native";
import logo from "../assets/pic/Logo.png";

// the changes in this file, other than my comments, were from Prettier.

// rename this component (remove the ~Example part)
// does this need to be a class-based component?
export default class StackedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Image
          source={logo}
          style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
        />
        <H1 style={{ alignSelf: "center" }}>Join store plz</H1>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              {/* <Input /> */}
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              {/* <Input /> */}
            </Item>
          </Form>
          <Button
            onPress={() => this.props.navigation.navigate("List")} {/* should be connected to redux  */}
            style={{
              alignSelf: "center",
              backgroundColor: "#2D7FC0",
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 1,
              width: "25%",
              marginTop: 10,
            }}
            full
            rounded
          >
            <Text> Login</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate("Signup")}
            style={{
              alignSelf: "center",
              width: "25%",
              marginTop: 10,
            }}
            transparent
          >
            <Text> Not a Maw ?! </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
