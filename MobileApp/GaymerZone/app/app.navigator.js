import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./screens/login/login.screen";
import { HomeScreen } from "./screens/home/home.screen";
import { RegisterScreen } from "./screens/register/register.screen"
import { LoginMember } from "./screens/login/loginMember/loginMember.screen";
import { LoginGuest } from "./screens/login/loginGuest/loginGuest.screen";
import { JukeboxScreen } from "./screens/Jukebox/jukebox.screen";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Screen name="Login" component={LoginScreen}></Screen>
                <Screen name="LoginMember" component={LoginMember}></Screen>
                <Screen name="LoginGuest" component={LoginGuest}></Screen>
                <Screen name="Home" component={HomeScreen}></Screen>
                <Screen name="Register" component={RegisterScreen}></Screen>
                <Screen name="Jukebox" component={JukeboxScreen}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}