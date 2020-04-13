import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Cart extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square
                                    source={{ uri: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/51246528_023_b?$xlarge$&hei=900&qlt=80&fit=constrain' }} />
                            </Left>
                            <Body>
                                <Text>Hoodie 1</Text>
                                <Text note numberOfLines={1}>Size Large</Text>
                            </Body>
                            <Right>
                                <Button danger transparent>
                                    <Text>Remove</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square
                                    source={{ uri: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/51246528_023_b?$xlarge$&hei=900&qlt=80&fit=constrain' }} />
                            </Left>
                            <Body>
                                <Text>Hoodie 2</Text>
                                <Text note numberOfLines={1}>Size Large</Text>
                            </Body>
                            <Right>
                                <Button danger transparent>
                                    <Text>Remove</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}