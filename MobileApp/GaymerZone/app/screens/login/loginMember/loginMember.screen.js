import React, { useState } from 'react'
import { View } from 'react-native';
import { Button, Card, TextInput, IconButton, Text, useTheme } from 'react-native-paper';
import { memberLoginStyle } from './loginMember.style';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginMember = (props) =>{
    const theme = useTheme();
    const style = memberLoginStyle(theme);
    const [username, setUsername] = useState(0)
    const [password, setPassword] = useState(0)

    const login = async () => {
        const resp = await fetch("http://143.198.43.72:8000/usewr/login?username=" + username + "&password=" + password, {
            method: "GET"})
        const json = await resp.json()
        
        if (json.description == "login!!!") {
            props.navigation.navigate("Home");
        } else {
            console.log("something went wrong...");
        }
    }
    const register = async () => {
        const resp = await fetch("http://143.198.43.72:8000/user/login?username=" + username + "&password=" + password, {
            method: "GET"})
        const json = await resp.json()

        if (json.description == "login!!!") {
            props.navigation.navigate("Register");
        } else {
            console.log("something went wrong...");
        }
    }

    return (
        <SafeAreaView style={style.content}>
            <View style={style.view}>
                <Text variant='headlineLarge' style={style.title}>Member</Text>
                <Card>
                    <Card.Content>
                        <TextInput label="Email" keyboardType='email-address'></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button style={style.cardButton}>Forgot email/password</Button>
                        <Button onPress={login} style={style.cardButton} mode="contained">Login</Button>
                        <Button onPress={register} style={style.cardButton} mode="outlined">Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}