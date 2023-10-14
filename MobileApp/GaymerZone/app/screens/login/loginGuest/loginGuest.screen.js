import React from "react";
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from '../login.style';

export const LoginGuest = (props) =>
{
    return (
        <Card>
            <Card.Content>
                <TextInput label="Phone number" keyboardType='phone-pad'></TextInput>
                <Button onPress={props.login} style={loginStyle.cardButton} mode="contained">Login</Button>
            </Card.Content>
        </Card>
    )
}