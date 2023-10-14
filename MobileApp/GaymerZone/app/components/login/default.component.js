import React from "react";
import { Button, Card, TextInput } from 'react-native-paper';
import { loginComponentStyle } from './login.style';

export const DefaultComponent = (props) => {
    return (
        <Card>
            <Card.Content>
                <Button onPress={props.member} style={loginComponentStyle.cardButton} mode="contained">Members login</Button>
                <Button onPress={props.guest} style={loginComponentStyle.cardButton} mode="outlined">Guest login</Button>
            </Card.Content>
        </Card>
    )
}