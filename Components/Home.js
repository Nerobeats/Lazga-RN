import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Button, View, H3 } from 'native-base';
import name from "../assets/pic/name.png"
import explorer from "../assets/pic/explorer.png"
import explorer2 from "../assets/pic/explorer2.png"
import saving from "../assets/pic/saving.png"
import ViewSlider from 'react-native-view-slider'
import { StyleSheet } from 'react-native';
import { Col, Row } from "react-native-easy-grid";


function Home({ navigation }) {
    return (
        <Container style={{ marginTop: 25 }} >
            <Content >
                <Image source={name} style={{ height: 70, width: null, flex: 1, resizeMode: "contain" }} />
                <ViewSlider
                    renderSlides={
                        <>
                            <View style={styles.viewBox}>
                                <Image source={explorer} style={{ flex: .75, resizeMode: "contain", marginBottom: 10 }} />
                                <H3>Join Lazga</H3>
                                <Text>explore picks found just for you </Text>
                            </View>
                            <View style={styles.viewBox}>
                                <Image source={explorer2} style={{ flex: .85, resizeMode: "contain" }} />
                                <H3>Find your thing</H3>
                                <Text style={{ marginBottom: 20 }} >Save your faves.View them any where </Text>
                            </View>
                            <View style={styles.viewBox}>
                                <Image source={saving} style={{ flex: .75, resizeMode: "contain" }} />
                                <H3>Get exclusive offers</H3>
                                <Text style={{ marginBottom: 20 }} >Saving, promos and special discounts? Yep </Text>
                            </View>
                        </>
                    }
                    style={styles.slider}     //Main slider container style
                    height={400}    //Height of your slider
                    slideCount={3}    //How many views you are adding to slide
                    dots={true}     // Pagination dots visibility true for visibile 
                    dotActiveColor='red'     //Pagination dot active color
                    dotInactiveColor='gray'    // Pagination do inactive color
                    dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                    autoSlide={false}    //The views will slide automatically
                    slideInterval={1000}    //In Miliseconds
                />
                <Row>
                    <Col>
                        <Button full rounded
                            style={{ alignSelf: "center", width: 100 }}
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text>
                                Login
    </Text>
                        </Button >
                    </Col>
                    <Col>
                        <Button full rounded
                            style={{ alignSelf: "center", width: 100 }}
                            onPress={() => navigation.navigate("Signup")}
                        >
                            <Text>
                                Signup
    </Text>
                        </Button>
                    </Col>
                </Row>
                <Button full transparent onPress={() => navigation.navigate("List")}>
                    <Text>
                        continue as a gest
                        </Text>
                </Button>
            </Content>
        </Container>
    );
}


const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: 360,
        padding: 10,
        alignItems: 'center',
        height: null,
        flex: 1
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 15
    }
});

export default Home