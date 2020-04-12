import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, H1, Text } from 'native-base';
import { Image } from "react-native"
import logo from "../assets/pic/Logo.png"
export default class StackedLabelExample extends Component {
    render() {
        return (
            <Container>

                <Image
                    source={logo}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                />
                <H1 style={{ alignSelf: "center" }}>
                    Join store plz
                    </H1>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button onPress={() => alert("No")} style={{ height: 40, width: 90, alignSelf: "center", text: "center", marginTop: 10, }} full rounded >
                        <Text > Signup</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}