import React from "react";
import { View } from 'react-native';
import { Button, Card, Text, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { guestLoginStyle } from "./loginGuest.style";

export const LoginGuest = (props) =>{
    const theme = useTheme();
    const style = guestLoginStyle(theme);

    const login = () => props.navigation.navigate("Home");

    return (
        <SafeAreaView style={style.content}>
            <View style={style.view}>
                <Text variant="headlineLarge" style={style.title}>Guest</Text>
                <Card>
                    <Card.Content>
                        <TextInput label="Phone number" keyboardType='phone-pad'></TextInput>
                        <Button onPress={login} style={style.cardButton} mode="contained">Login</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}