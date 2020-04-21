import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import ColorPalette from "react-native-color-palette";
import { Button, Picker, Form, Icon, View, H1, Text } from "native-base";
import { connect } from "react-redux";
import { setColor, setSize } from "../redux/actions/options";
import Dialog, { DialogContent } from "react-native-popup-dialog";

class ColorSize extends Component {
  state = {
    selected: 1,
    visible: false,
  };
  onValueChange = (value) => {
    this.setState({ selected: value });
    this.props.setSize(value);
  };
  colorAndVisible = (color) => {
    this.setState({ visible: false });
    this.props.setColor(color);
  };
  render() {
    const { color, setColor } = this.props;
    return (
      <Grid>
        <Col>
          <Row>
            <Text style={{ alignSelf: "center", marginLeft: 5 }}>Size :</Text>
            <Form>
              <Picker
                mode="dropdown"
                iosHeader="Select Size"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: 130 }}
                selectedValue={this.state.selected}
                onValueChange={(value) => this.onValueChange(value)}
              >
                <Picker.Item label="Small" value={1} />
                <Picker.Item label="Mediam" value={2} />
                <Picker.Item label="Large" value={3} />
                <Picker.Item label="XL" value={4} />
                <Picker.Item label="XXL" value={5} />
              </Picker>
            </Form>
          </Row>
        </Col>
        <Col>
          <View style={{ alignSelf: "center" }}>
            <Row>
              <Text style={{ alignSelf: "center" }}>Color :</Text>
              <Button
                title="pick a color"
                style={{
                  backgroundColor: color,
                  alignSelf: "center",
                  marginLeft: 2,
                  width: 40,
                  height: 40,
                  borderColor: "#878787",
                  borderWidth: 0.5,
                }}
                onPress={() => {
                  this.setState({ visible: true });
                }}
                rounded
              >
                <Text
                  style={{
                    color: "black",
                    textShadowColor: "white",
                  }}
                >
                  {"    "}
                </Text>
              </Button>
            </Row>
            <Dialog
              visible={this.state.visible}
              onTouchOutside={() => {
                this.setState({ visible: false });
              }}
            >
              <DialogContent>
                <ColorPalette
                  onChange={(color) => this.colorAndVisible(color)}
                  defaultColor={color}
                  scaleToWindow
                  colors={[
                    "#231f20",
                    "#ffffff",
                    "#2b3042",
                    "#0062a4",
                    "#4e91c5",
                    "#413e3d",
                    "#817d7f",
                    "#bfbdbd",
                    "#c0bfc2",
                    "#a61d40",
                    "#834655",
                    "#4b5436",
                    "#329c5e",
                    "#00a78a",
                    "#ba2637",
                    "#604b8c",
                    "#c6bad3",
                    "#cf3176",
                    "#da5071",
                    "#fdda22",
                    "#e87038",
                    "#694833",
                    "#a29264",
                    "#eee0cd",
                  ]}
                  title={"Pick a color:"}
                />
              </DialogContent>
            </Dialog>
          </View>
        </Col>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  size: state.options.size,
  color: state.options.color,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setColor: (color) => dispatch(setColor(color)),
    setSize: (size) => dispatch(setSize(size)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ColorSize);
