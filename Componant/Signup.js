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
                    Join Maws plz
                    </H1>
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
                    <Button onPress={() => alert("No")} style={{
                        alignSelf: "center",
                        backgroundColor: "#2D7FC0", borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 1, width: '25%', marginTop: 10
                    }} full rounded full rounded >
                        <Text > Signup</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}