import React from 'react'
import { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = (props) => {
    const theme = useTheme();
    const style = loginStyle(theme);

    const loginMember = () => props.navigation.navigate("LoginMember");
    const loginGuest = () => props.navigation.navigate("LoginGuest");

    return (
        <SafeAreaView style={style.content}>
            <View style={style.view}>
                <Image style={style.image} source={require("../../../assets/logos/Name.png")} />
                <View style={style.cardView}>
                    <Card>
                        <Card.Content>
                            <Button onPress={loginMember} style={style.cardButton} mode="contained">Members login</Button>
                            <Button onPress={loginGuest} style={style.cardButton} mode="outlined">Guests login</Button>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        </SafeAreaView>
    );
}
