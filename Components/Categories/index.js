import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Card, CardItem, Content } from 'native-base';
import { Image, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import { ButtonGroup } from "react-native-elements"
import { connect } from "react-redux";

class Catagories extends Component {
  state = {
    selectedIndex: 0,
    query: "",
    counter: 0

  }
  resetCounter() {
    this.setState({ counter: 0 })
  }
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  changeHandler(event) {
    this.setState({ query: event.target.value })
  }
  render() {
    const buttons = ['All', 'Hoodies', 'T-shirts', 'Mugs', 'stickers']
    const { selectedIndex } = this.state

    return (
      <Container>
        <Header searchBar rounded transparent
          style={{ borderRadius: 10, borderBottomWidth: 1, borderBottomColor: "#e8e8ec", marginTop: 5 }}
        >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChange={() => this.changeHandler()} />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ButtonGroup
          onPress={(number) => this.updateIndex(number)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}

        />
        <Content>

          {this.props.items.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("Detail", { item })
                }
              >
                <Card style={{
                  resizeMode: "contain",
                  width: 175
                }} >
                  <CardItem >
                    <Image
                      source={{ uri: item.image_url }}
                      style={{ height: 300, width: null, flex: 1, resizeMode: "cover" }}
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
export default connect(mapStateToProps)(Catagories);