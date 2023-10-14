import React from 'react'
import { View } from 'react-native';
import { Button, Card, TextInput, IconButton, Text } from 'react-native-paper';
import { memberLoginStyle } from './loginMember.style';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginMember = (props) =>{
    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register");

    return (
        <SafeAreaView style={memberLoginStyle.content}>
            <View style={memberLoginStyle.view}>
                <Text variant='headlineLarge' style={memberLoginStyle.title}>Member</Text>
                <Card>
                    <Card.Content>
                        <TextInput label="Email" keyboardType='email-address'></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button style={memberLoginStyle.cardButton}>Forgot email/password</Button>
                        <Button onPress={login} style={memberLoginStyle.cardButton} mode="contained">Login</Button>
                        <Button onPress={register} style={memberLoginStyle.cardButton} mode="outlined">Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}