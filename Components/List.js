import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Button } from "native-base";
import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class LazgaList extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#e8e8ec" }}>
        <Content>
          {this.props.items.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("Detail", { item })
                }
              >
                <Card>
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
                  <CardItem>

                    <Text >{item.name}</Text>
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
