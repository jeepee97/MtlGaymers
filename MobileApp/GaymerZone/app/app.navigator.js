import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./screens/login/login.screen";
import { HomeScreen } from "./screens/home/home.screen";
import { RegisterScreen } from "./screens/register/register.screen"

const { Navigator, Screen } = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Screen name="Login" component={LoginScreen}></Screen>
                <Screen name="Home" component={HomeScreen}></Screen>
                <Screen name="Register" component={RegisterScreen}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}