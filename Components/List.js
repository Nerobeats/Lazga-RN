import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Button } from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";

/**
 * make function
 */
class LazgaList extends Component {
  render() {
    return (
      <Container>
        <Content>
          {this.props.items.map((item) => {
            /**
             * own component
             */
            return (
              <Card key={item.id}>
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
                  <Button
                    dark
                    transparent
                    onPress={() =>
                      this.props.navigation.navigate("Detail", { item })
                    }
                    style={{
                      alignSelf: "center",
                    }}
                    full
                  >
                    <Text>{item.name}</Text>
                  </Button>
                </CardItem>
              </Card>
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

/**
 * dead code
 */
// const mapDispatchToProps = dispatch => {
//     return {
//         addItemToCart: (item) =>
//             dispatch(addItemToCart(item))
//     };
// };
export default connect(mapStateToProps)(LazgaList);
