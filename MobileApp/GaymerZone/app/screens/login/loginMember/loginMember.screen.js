import React from 'react'
import { View } from 'react-native';
import { Button, Card, TextInput, IconButton } from 'react-native-paper';
import { loginStyle } from '../login.style';
import { theme } from '../../../../App.style';

export const LoginMember = (props) =>{
    return (
        <View>
            <Button mode="containeds">test</Button>
            <Card>
                <Card.Content>
                    <TextInput label="Email" keyboardType='email-address'></TextInput>
                    <TextInput label="Password" secureTextEntry={true}></TextInput>
                    <Button style={loginStyle.cardButton}>Forgot email/password</Button>
                    <Button onPress={props.login} style={loginStyle.cardButton} mode="contained">Login</Button>
                    <Button onPress={props.register} style={loginStyle.cardButton} mode="outlined">Register</Button>
                </Card.Content>
            </Card>
        </View>
    )
}