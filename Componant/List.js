import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Left, H3, H1 } from 'native-base';
import Logo from "../assets/pic/Logo.png"
import Data from '../Data/data'; // data import should be lowercased
import { Image } from 'react-native';

export default class List extends Component {

    render() {

        return (
            <Container >

                <Content>


                    {Data.map(item => {
                        return (
                            <Card>
                                <CardItem cardBody>
                                    <Image source={{ uri: 'https://www.blackoutmusic.nl/image/cache/catalog/sweaters/hoodie-blackout-space-550x550.jpg' }}
                                        style={{ height: 300, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem>

                                    <Button onPress={() => this.props.navigation.navigate("Detail", { item })}
                                        style={{
                                            alignSelf: "center",
                                            backgroundColor: "#2D7FC0", borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 1
                                        }} full  >
                                        <Text>Buy now !</Text>
                                    </Button>
                                </CardItem>
                            </Card>
                        );
                    })}
                </Content>

            </Container>)


    }
}