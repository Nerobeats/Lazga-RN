import React, { Component } from "react";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
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
import { login } from "../redux/actions/user";
import { connect } from "react-redux";

class Login extends Component {
    state = {
        username: "",
        password: "",
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
                                {errors ? errors : "Welcome back "}
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
                    </Form>
                    <Button
                        onPress={() =>
                            this.props.login(this.state, () =>
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
                        <Text> Login</Text>
                    </Button>
                    <Button
                        onPress={() => this.props.navigation.navigate("Signup")}
                        style={{
                            alignSelf: "center",
                            marginTop: 10,
                        }}
                        transparent
                    >
                        <Text>Need an account ?</Text>
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
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
