import React from "react";
import { Button, Card, TextInput } from 'react-native-paper';
import { loginComponentStyle } from './login.style';

export const GuestLoginComponent = (props) =>
{
    return (
        <Card>
            <Card.Content>
                <TextInput label="Phone number" keyboardType='phone-pad'></TextInput>
                <Button onPress={props.login} style={loginComponentStyle.cardButton} mode="contained">Login</Button>
            </Card.Content>
        </Card>
    )
}