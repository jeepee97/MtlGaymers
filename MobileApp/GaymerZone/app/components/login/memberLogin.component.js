import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper';
import { loginComponentStyle } from './login.style';

export const MemberLoginComponent = (props) =>{
    return (
        <Card>
            <Card.Content>
                <TextInput label="Email" keyboardType='email-address'></TextInput>
                <TextInput label="Password" secureTextEntry={true}></TextInput>
                <Button style={loginComponentStyle.cardButton}>Forgot email/password</Button>
                <Button onPress={props.login} style={loginComponentStyle.cardButton} mode="contained">Login</Button>
                <Button onPress={props.register} style={loginComponentStyle.cardButton} mode="outlined">Register</Button>
            </Card.Content>
        </Card>
    )
}