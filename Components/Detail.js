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

class Detail extends Component {
  state = {
    Size: "Small",
  };
  render() {
    const { item } = this.props.route.params
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
                  <H3>Name:{item.name}</H3>
                  <H3>Price:{item.itemPrice}</H3>
                  <H3>description:{item.description}</H3>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Picker
            note
            mode="dropdown"
            style={{ width: 150 }}
            selectedValue={this.state.Size}
            onValueChange={(Size) => this.setState({ Size })}
          >
            <Picker.Item label="Small" value="Small" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="Large" value="Large" />
          </Picker>

          <Button
            onPress={() =>
              this.props.addItemToCart(item)
            }
            style={{
              alignSelf: "center",
              backgroundColor: "#2D7FC0",
              borderBottomWidth: 2,
              borderLeftWidth: 2,
              borderRightWidth: 1,
              marginBottom: 10
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
export default connect(null, mapDispatchToProps)(Detail);
