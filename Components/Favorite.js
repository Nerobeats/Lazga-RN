import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab, Text } from "native-base";

import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import favlogo from "../assets/pic/favlogo.gif";

class LazgaList extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 20 }}>
          <Text style={{ color: "white" }}>My Favorites</Text>
        </Header>
        {/* <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="All">
            <Text>111111111111111111111111111111111</Text>
          </Tab>
          <Tab heading="Tee's">
            <Text>22222222222222222222222222222222222</Text>
          </Tab>
          <Tab heading="Mugs">
            <Text>333333333333333333333333333333333333</Text>
          </Tab>
          <Tab heading="Posters">
            <Text>44444444444444444444444444444444444</Text>
          </Tab>
          <Tab heading="Caps">
            <Text>55555555555555555555555555555</Text>
          </Tab>
          <Tab heading="Popsockets">
            <Text>66666666666666666666666666666666</Text>
          </Tab>
        </Tabs> */}
        <Image
          source={favlogo}
          style={{
            flex: 1,
            width: 370,
            alignSelf: "center",
            resizeMode: "cover",
            marginTop: 5,
          }}
        />
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
