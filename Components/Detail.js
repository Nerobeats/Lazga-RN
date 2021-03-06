import React, { Component } from "react";
import {
  Container,
  Content,
  CardItem,
  Body,
  Text,
  Button,
  Left,
} from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions/cart";
import ColorSize from "./ColorSize";
class Detail extends Component {
  render() {
    const { item } = this.props.route.params;
    //const { size, color } = this.props;

    return (
      <Container style={{ backgroundColor: "#e8e8ec" }}>
        <Content>
          <CardItem cardBody>
            <Image
              source={{ uri: item.image_url }}
              style={{
                alignSelf: "center",
                height: 300,
                width: null,
                flex: 1,
              }}
            />
          </CardItem>
          <CardItem style={{ backgroundColor: "#e8e8ec" }}>
            <Left>
              <Body>
                <Text>Name: {item.name}</Text>
                <Text>Price: {item.itemPrice} JD</Text>
                <Text>description: {item.description}</Text>
              </Body>
            </Left>
          </CardItem>
          <ColorSize />

          <Button
            onPress={() => this.props.addItemToCart(item)}
            rounded
            style={{
              alignSelf: "center",
              marginTop: 10,
              backgroundColor: "#2D7FC0",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "white" }}> Add to cart </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItemToCart(item)),
  };
};
const mapStateToProps = (state) => ({
  size: state.options.size,
  color: state.options.color,
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
