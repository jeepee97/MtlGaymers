import React from 'react'
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = (props) => {
    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register");

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Card>
                    <Card.Title title="Gaymer Zone" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Email" keyboardType='email-address'></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button style={loginStyle.cardButton}>Forgot email/password</Button>
                        <Button onPress={login} style={loginStyle.cardButton} mode="contained">Login</Button>
                        <Button onPress={register} style={loginStyle.cardButton} mode="outlined">Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}
