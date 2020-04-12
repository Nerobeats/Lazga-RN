import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Left, H3, H1 } from 'native-base';
import Logo from "../assets/pic/Logo.png"
import Data from '../data';
import { Image } from 'react-native';

export default class List extends Component {
    render() {

        return (
            <Container>


                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source="https://my-test-11.slatic.net/p/2d709b27fee26107d0c0c2867b69f530.jpg_340x340q80.jpg_.webp" />
                                <Body>
                                    <H3>Name:{this.props.route.params.item.name}</H3>
                                    <H3>Price:{this.props.route.params.item.price}</H3>
                                    <H3>Detail:{this.props.route.params.item.detail}</H3>
                                    {console.log(this.props.route.params)}
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source="https://my-test-11.slatic.net/p/2d709b27fee26107d0c0c2867b69f530.jpg_340x340q80.jpg_.webp"
                                style={{ height: null, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Button onPress={() => this.props.navigation.navigate("List")} style={{
                                marginLeft: 40, alignSelf: "center",
                                backgroundColor: "#2D7FC0", borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 1
                            }} full  >
                                <Text>Back</Text>
                            </Button>
                        </CardItem>
                    </Card>
                    <Button onPress={() => alert("No")} style={{
                        marginLeft: 40, alignSelf: "center",
                        backgroundColor: "#2D7FC0", borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 1
                    }} full  >
                        <H1 style={{ color: "white" }} > buy now </H1>
                    </Button>
                </Content>

            </Container>
        )


    }
}