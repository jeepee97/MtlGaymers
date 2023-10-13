import React from "react";
import { SafeAreaView } from "react-native";
import { homeStyle } from "./home.style";
import { Title } from "react-native-paper";

export const HomeScreen = () => {
    return (
        <SafeAreaView style={homeStyle.AndroidSafeArea}>
            <Title>Home screen</Title>
        </SafeAreaView>
    );
}