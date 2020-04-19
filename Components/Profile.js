import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import pic from "../assets/splash.png"
import { connect } from "react-redux";
import { logout } from "../redux/actions/user";
//basic componant for texting
class Profile extends Component {
    render() {
        const { logout } = this.props
        return (
            <Container>
                <Content>

                    <CardItem>
                        <Left>
                            <Thumbnail source={pic} style={{ height: 150, width: 150, flex: 1 }} />
                            <Body>
                                <Text>Username </Text>
                                <Text note>nick name</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Button transparent>

                                <Text>12 Orders</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>

                                <Text>fevorate list</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>Regestered 13h ago
                            </Text>
                        </Right>
                    </CardItem>
                    <Button full danger onPress={() => logout}>
                        <Text>
                            Logout
                        </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};
export default connect(null, mapDispatchToProps)(Profile)