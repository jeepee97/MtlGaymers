import React from "react";
import { SafeAreaView, View } from "react-native";
import { homeStyle } from "./home.style";
import { HomeSectionComponent } from "../../components/home/homeSection.component";
import { HeaderComponent } from "../../components/header/header.component";
import { faGamepad, faMusic, faPowerOff, faTrophy} from "@fortawesome/free-solid-svg-icons";


export const HomeScreen = () => {
    return (
        <SafeAreaView style={homeStyle.AndroidSafeArea}>
            <HeaderComponent title="username"/>
            <View style={homeStyle.view}>
                <HomeSectionComponent icon={faMusic} title='Jukebox'/>
                <HomeSectionComponent icon={faGamepad} title='Gaymer Zone'/>
                <HomeSectionComponent icon={faTrophy} title='Achivements'/>
                <HomeSectionComponent icon={faPowerOff} title='Disconnect'/>
            </View>
        </SafeAreaView>
    );
}