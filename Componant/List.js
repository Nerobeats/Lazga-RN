import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Left, H3, H1 } from 'native-base';
import Logo from "../assets/pic/Logo.png"
import Data from '../data';
import { Image } from 'react-native';

export default class List extends Component {

    render() {

        return (
            <Container >


                <Image
                    source={Logo}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                />
                {Data.map(item => {
                    return (
                        <Card >
                            <CardItem  >
                                <Thumbnail source="https://my-test-11.slatic.net/p/2d709b27fee26107d0c0c2867b69f530.jpg_340x340q80.jpg_.webp"
                                    style={{ marginRight: 40 }} />
                                <Text >
                                    {item.name}
                                </Text>
                                <Button onPress={() => this.props.navigation.navigate("Detail", { item })}
                                    style={{
                                        marginLeft: 40, alignSelf: "center",
                                        backgroundColor: "#2D7FC0", borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 1
                                    }} full  >
                                    <Text>Detail</Text>
                                </Button>
                            </CardItem>
                        </Card>
                    );
                })}
            </Container>)


    }
}