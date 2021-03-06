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
  Card,
  CardItem,
  Body,
} from "native-base";
import { Image, TextInput } from "react-native";
import logo from "../assets/pic/Logo.png";
import { signup } from "../redux/actions/user";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  render() {
    const { errors } = this.props;
    return (
      <Container>
        <Content>
          <Image
            source={logo}
            style={{
              flex: 1,
              height: 200,
              width: 200,
              alignSelf: "center",
              resizeMode: "cover",
              marginTop: 5,
            }}
          />

          <Body>
            <Text style={{ alignSelf: "center" }}>
              {errors ? errors : "Welcome to Lazga family "}
            </Text>
          </Body>

          <Form>
            <Item stackedLabel>
              <Label></Label>
              <TextInput
                style={{ width: "100%" }}
                placeholder="Username"
                placeholderTextColor="#A6AEC1"
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
              />
            </Item>
            <Item stackedLabel last>
              <Label></Label>
              <TextInput
                style={{ width: "100%" }}
                placeholder="Password"
                placeholderTextColor="#A6AEC1"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <Item stackedLabel>
              <Label></Label>
              <TextInput
                style={{ width: "100%" }}
                placeholder="First Name"
                placeholderTextColor="#A6AEC1"
                value={this.state.first_name}
                onChangeText={(first_name) => this.setState({ first_name })}
              />
            </Item>
            <Item stackedLabel>
              <Label></Label>
              <TextInput
                style={{ width: "100%" }}
                placeholder="Last Name"
                placeholderTextColor="#A6AEC1"
                value={this.state.last_name}
                onChangeText={(last_name) => this.setState({ last_name })}
              />
            </Item>
            <Item stackedLabel>
              <Label></Label>
              <TextInput
                style={{ width: "100%" }}
                placeholder="E-mail"
                placeholderTextColor="#A6AEC1"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>
          </Form>
          <Button
            onPress={() =>
              this.props.signup(this.state, () =>
                this.props.navigation.navigate("List")
              )
            }
            style={{
              alignSelf: "center",
              width: 100,
              backgroundColor: "#2D7FC0",
              marginTop: 10,
            }}
            full
            rounded
          >
            <Text> Signup</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate("Login")}
            style={{
              alignSelf: "center",
              marginTop: 10,
            }}
            transparent
          >
            <Text>Already have an account ?</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    errors: state.errors.errors,
  };
};
const mapDispatchToProps = { signup };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
