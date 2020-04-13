import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Left, H3, H1 } from 'native-base';
import { Image } from 'react-native';
import { connect } from "react-redux";

class LazgaList extends Component {

    render() {

        return (
            <Container >

                <Content>


                    {this.props.items.map(item => {
                        return (
                            <Card key={item.id} >
                                <CardItem cardBody>
                                    {/* <Image source={{ uri: item.image_url }}
                                        style={{
                                            alignSelf: 'center',
                                            height: 100,
                                            width: 100,
                                            flex: 1
                                        }}

                                    /> */}
                                </CardItem>

                                <CardItem>

                                    <Button onPress={() => this.props.navigation.navigate("Detail", { item })}
                                        style={{
                                            alignSelf: "center",
                                            backgroundColor: "#2D7FC0", borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 1
                                        }} full  >
                                        <Text>{item.name}</Text>
                                    </Button>
                                </CardItem>
                            </Card>
                        );
                    })}
                </Content>

            </Container>)


    }
}

const mapStateToProps = state => ({
    items: state.item.items
})
// const mapDispatchToProps = dispatch => {
//     return {
//         addItemToCart: (item) =>
//             dispatch(addItemToCart(item))
//     };
// };

export default connect(mapStateToProps)(LazgaList)