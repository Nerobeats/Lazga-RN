import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, H2 } from 'native-base';
import data from "../../Data/Catagories"
export default class CardImageExample extends Component {
    render() {
        return (

            < Container > {/* There's a space here, does this work with the space?  */}
                <Content>
                    {data.map(cata => { {/* Don't put the .map() within the JSX, define it into a const above the return  */}
                        return (

                            <Card>
                                <CardItem cardBody>
                                    <Image source={cata.image}
                                        style={{ height: 300, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem style={{ alignSelf: "center" }}>
                                    <Button dark transparent >
                                        <H2>{cata.title}</H2>
                                    </Button>
                                </CardItem>
                            </Card>
                        )
                    })}
                </Content>
            </Container >
        );
    }
}