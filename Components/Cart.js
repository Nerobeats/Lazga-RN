import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { connect } from "react-redux";
import { removeItemFromCart } from "../redux/actions/cart";
import { checkoutCart } from "../redux/actions/cart";

class Cart extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.props.items.map((item) => {
              return (
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: item.image_url }} />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note numberOfLines={1}>
                      Size Large
                    </Text>
                  </Body>
                  <Right>
                    <Button
                      danger
                      transparent
                      onPress={() => this.props.removeItemFromCart(item)}
                    >
                      <Text>Remove</Text>
                    </Button>
                  </Right>
                </ListItem>
              );
            })}
            <Button rounded info style={{
              alignSelf: "center",
              marginTop: 10,
              backgroundColor: "#2D7FC0",
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 1,
            }} onPress={() => this.props.checkoutCart()}>
              <Text>Checkout</Text>
            </Button>
          </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.cart.items,

});
const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    checkoutCart: () => dispatch(checkoutCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
