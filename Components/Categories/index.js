import React, { Component } from "react";
import {
  Container,
  Header,
  Item,
  Icon,
  Button,
  Text,
  Card,
  CardItem,
  Content,
  Left,
} from "native-base";
import { Image, TouchableOpacity } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { connect } from "react-redux";
import { TextInput } from "react-native";

class Catagories extends Component {
  state = {
    selectedIndex: 0,
    query: "",
    counter: 0,
    type: "",
  };
  resetCounter() {
    this.setState({ counter: 0 });
  }
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    this.setState({ type: this.props.types[selectedIndex].type });
  }
  setAllItems(type) {
    this.setState({ type: type });
  }
  render() {
    const buttons = this.props.types.map((type) => type.type);
    const typedItems = () => {
      if (this.state.type === "All Items") {
        this.setState({ type: "" });
        return this.props.items;
      } else {
        if (this.state.type === "") {
          return this.props.items;
        }
        const typeID = this.props.types.filter(
          (type) => type.type === this.state.type
        );
        console.log(typeID[0].id);
        return this.props.items.filter((item) => item.type === typeID[0].id);
      }
    };
    const { selectedIndex } = this.state;
    const query = this.state.query.toLowerCase();
    const filteredItems = typedItems().filter((item) =>
      `${item.tags} ${item.description}`.toLowerCase().includes(query)
    );
    return (
      <Container>
        {console.log()}
        <Header
          searchBar
          rounded
          transparent
          style={{
            borderRadius: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#e8e8ec",
            marginTop: 5,
          }}
        >
          <Item>
            <Icon name="ios-search" />
            <TextInput
              placeholder="Search"
              onChangeText={(text) => this.setState({ query: text })}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ButtonGroup
          onPress={(number) => this.updateIndex(number)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 40 }}
        />
        <Content>
          {filteredItems.map((item) => {
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
                    flex: 1,
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
                    <Left></Left>
                    <Button
                      full
                      danger
                      rounded
                      transparent
                      onPress={() => alert("Added to favorites")}
                    >
                      <Icon
                        name="heart"
                        style={{ fontSize: 30, color: "#2d7fc0" }}
                      />
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
  types: state.item.types,
});
export default connect(mapStateToProps)(Catagories);
