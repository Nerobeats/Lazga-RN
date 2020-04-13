import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Left, H3, H1, Picker, Right } from 'native-base';
import { Image } from 'react-native';
import Hoodies from "../assets/pic/Catagories/HoodieCata.jpg"


export default class List extends Component {
    state = {
        Size: "Small"
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={Hoodies}
                                style={{ height: 350, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Body>
                                    <H3>Name:{this.props.route.params.item.name}</H3> {/* should probably put the item in a const above the return  */}
                                    <H3>Price:{this.props.route.params.item.price}</H3>
                                    <H3>Detail:{this.props.route.params.item.detail}</H3>
                                </Body>
                            </Left>
                        </CardItem>

                    </Card>

                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 150 }}
                        selectedValue={this.state.Size}
                        onValueChange={Size => this.setState({ Size })}
                    >
                        <Picker.Item label="Small" value="Small" />
                        <Picker.Item label="Medium" value="Medium" />
                        <Picker.Item label="Large" value="Large" />
                    </Picker>

                    <Button onPress={() => alert("No")} style={{
                        marginLeft: 40, alignSelf: "center",
                        backgroundColor: "#2D7FC0", borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 1
                    }} full  >
                        <Text style={{ color: "white" }} > Add to cart </Text>
                    </Button>


                </Content>

            </Container>
        )


    }
}