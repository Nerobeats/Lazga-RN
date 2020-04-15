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
    const { errors } = this.props
    return (
      <Container>
        <Image
          source={logo}
          style={{ flex: 1, height: null, width: 300, alignSelf: "center", resizeMode: 'cover' }}
        />

        <Card >
          <CardItem>
            <Body>
              <Text style={{ alignSelf: "center" }}>
                {errors ? errors : "Welcome to Lazga family "}
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#A6AEC1"
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#A6AEC1"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <Item stackedLabel>
              <Label>First Name</Label>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#A6AEC1"
                value={this.state.first_name}
                onChangeText={(first_name) => this.setState({ first_name })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Last Name</Label>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#A6AEC1"
                value={this.state.last_name}
                onChangeText={(last_name) => this.setState({ last_name })}
              />
            </Item>
            <Item stackedLabel>
              <Label>E-mail</Label>
              <TextInput
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
