import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { registerStyle } from "./register.style";
import { HeaderComponent } from "../../components/header/header.component";

export const RegisterScreen = () => {
    return (
        <SafeAreaView style={styleText.AndroidSafeArea}>
            <ScrollView>
                <HeaderComponent title="Register"/>
                <View style={registerStyle.content}>
                    <TextInput label="Name"/>
                    <TextInput label="Email" keyboardType="email-address"/>
                    <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color}/>}/>
                    <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color}/>}/>
                    <TextInput label="Phone number" keyboardType="phone-pad"/>
                    <Button mode="contained" style={registerStyle.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styleText = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});