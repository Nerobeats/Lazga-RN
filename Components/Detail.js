import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Left,
  H3,
  Picker,
} from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions/cart";
import ColorSize from "./ColorSize";
class Detail extends Component {
  render() {
    const { item } = this.props.route.params;
    const { size, color } = this.props;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{ uri: item.image_url }}
                style={{ height: 350, width: "100%" }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>Name:{item.name}</Text>
                  <Text>Price:{item.itemPrice}</Text>
                  <Text>description:{item.description}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <ColorSize />

          <Button
            onPress={() => this.props.addItemToCart(item)}
            style={{
              alignSelf: "center",
              backgroundColor: "#2D7FC0",
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 1,
              marginBottom: 10,
            }}
            rounded
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
