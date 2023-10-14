import React from 'react'
import { View } from 'react-native';
import { Button, Card, TextInput, IconButton, Text } from 'react-native-paper';
import { memberLoginStyle } from './loginMember.style';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginMember = (props) =>{
    return (
        <SafeAreaView style={memberLoginStyle.content}>
            <View style={memberLoginStyle.view}>
                <Text variant='headlineLarge' style={memberLoginStyle.title}>Member</Text>
                <Card>
                    <Card.Content>
                        <TextInput label="Email" keyboardType='email-address'></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button style={memberLoginStyle.cardButton}>Forgot email/password</Button>
                        <Button onPress={props.login} style={memberLoginStyle.cardButton} mode="contained">Login</Button>
                        <Button onPress={props.register} style={memberLoginStyle.cardButton} mode="outlined">Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}