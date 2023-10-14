import React from "react";
import { View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { guestLoginStyle } from "./loginGuest.style";

export const LoginGuest = (props) =>
{
    return (
        <SafeAreaView style={guestLoginStyle.content}>
            <View style={guestLoginStyle.view}>
                <Text variant="headlineLarge" style={guestLoginStyle.title}>Guest</Text>
                <Card>
                    <Card.Content>
                        <TextInput label="Phone number" keyboardType='phone-pad'></TextInput>
                        <Button onPress={props.login} style={guestLoginStyle.cardButton} mode="contained">Login</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}