import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab, Text } from 'native-base';

import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class LazgaList extends Component {
    render() {
        return (
            <Container>
                <Header style={{ height: 20, marginTop: 25 }} >
                    <Text style={{ color: "white" }}>
                        My Favorites
</Text>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />} >
                    <Tab heading="All">

                    </Tab>
                    <Tab heading="Tee's">

                    </Tab>
                    <Tab heading="Mugs">

                    </Tab>
                    <Tab heading="Posters">

                    </Tab>
                    <Tab heading="Caps">

                    </Tab>
                    <Tab heading="Popsockets">

                    </Tab>
                </Tabs>
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
