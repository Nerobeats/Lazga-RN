import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Icon, Button, Right, Left, Toast } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class LazgaList extends Component {
  render() {
    return (
      <Container >
        <Content>
          {this.props.items.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("Detail", { item })
                }
              >
                <Card
                  style={{
                    resizeMode: "contain",
                    height: 180,
                    flex: 1
                  }}
                >

                  <Image
                    source={{ uri: item.image_url }}
                    style={{
                      height: 125,
                      width: null,
                      flex: 1,
                      resizeMode: "cover",
                    }}
                  />

                  <CardItem>


                    <Text>{item.name}</Text>

                    <Left>

                    </Left>
                    <Button full danger rounded transparent onPress={() => alert("Added to favorites")}>
                      <Icon name='heart' style={{ fontSize: 30, color: "#2d7fc0" }} />
                    </Button>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            );
          })}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.item.items,
});
// const mapDispatchToProps = dispatch => {
//     return {
//         addItemToCart: (item) =>
//             dispatch(addItemToCart(item))
//     };
// };
export default connect(mapStateToProps)(LazgaList);
