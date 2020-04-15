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

/**
 * this doesn't need to be a class
 */
class Cart extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.props.items.map((item) => {
              /**
               * this should be its own component
               */
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
