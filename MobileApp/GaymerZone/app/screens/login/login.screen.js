import React from 'react'
import { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = (props) => {
    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register");
    const loginMember = () => props.navigation.navigate("LoginMember");
    const loginGuest = () => props.navigation.navigate("LoginGuest");

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Image style={loginStyle.image} source={require("../../../assets/logos/Name.png")} />
                <View style={loginStyle.cardView}>
                    <Card>
                        <Card.Content>
                            <Button onPress={loginMember} style={loginStyle.cardButton} mode="contained">Members login</Button>
                            <Button onPress={loginGuest} style={loginStyle.cardButton} mode="outlined">Guests login</Button>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        </SafeAreaView>
    );
}
