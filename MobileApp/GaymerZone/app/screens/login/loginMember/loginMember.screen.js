import React, { useContext, useState } from 'react'
import { Keyboard, View } from 'react-native';
import { Button, Card, TextInput, IconButton, Text, useTheme } from 'react-native-paper';
import { memberLoginStyle } from './loginMember.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userTypes, userTypeContext } from '../../../app.context';

export const LoginMember = (props) =>{
    const theme = useTheme();
    const style = memberLoginStyle(theme);
    // const { setUserType } = useContext(userTypeContext)
    const [username, setUsername] = useState(0)
    const [password, setPassword] = useState(0)

    const login = async () => {
        Keyboard.dismiss()
        const query = "http://143.198.43.72:8000/user/login?username=" + username + "&password=" + password
        const resp = await fetch(query, {method: "GET"})
        .then(resp => resp.json())
        .then(json => {
            if (json.description == 'login!!!') {
                userTypeContext = userTypes.Member
                // userTypeContext = userTypes.Member
                props.navigation.navigate("Home")
            } else {
                console.log("something went wrong...")
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    const register = async () => {
        props.navigation.navigate("Register");
    }

    return (
        <SafeAreaView style={style.content}>
            <View style={style.view}>
                <Text variant='headlineLarge' style={style.title}>Member</Text>
                <Card>
                    <Card.Content>
                        <TextInput label="Email" keyboardType='email-address' onChangeText={setUsername}></TextInput>
                        <TextInput label="Password" secureTextEntry={true} onChangeText={setPassword}></TextInput>
                        <Button style={style.cardButton}>Forgot email/password</Button>
                        <Button onPress={login} style={style.cardButton} mode="contained">Login</Button>
                        <Button onPress={register} style={style.cardButton} mode="outlined">Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}