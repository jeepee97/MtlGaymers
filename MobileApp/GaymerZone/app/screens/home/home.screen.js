import React from "react";
import { SafeAreaView, View } from "react-native";
import { homeStyle } from "./home.style";
import { HomeSectionComponent } from "../../components/home/homeSection.component";
import { HeaderComponent } from "../../components/header/header.component";
import { faGamepad, faMusic, faPowerOff, faT, faTrophy} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "react-native-paper";


export const HomeScreen = (props) => {
    const theme = useTheme();
    const style = homeStyle(theme);

    const jukebox = () => props.navigation.navigate("Jukebox");
    const gaymerZone = () => props.navigation.navigate("GaymerZone");
    const achievements = () => props.navigation.navigate("Achievements");
    const leaderBoard = () => props.navigation.navigate("LeaderBoard");
     

    return (
        <SafeAreaView style={style.AndroidSafeArea}>
            <HeaderComponent title="username"/>
            <View style={style.view}>
                <HomeSectionComponent icon={faMusic} title='Jukebox' onPress={jukebox}/>
                <HomeSectionComponent icon={faGamepad} title='Gaymer Zone' onPress={gaymerZone}/>
                <HomeSectionComponent icon={faTrophy} title='Achievements' onPress={achievements}/>
                <HomeSectionComponent icon={faTrophy} title="Leader board" onPress={leaderBoard}/>
                <HomeSectionComponent icon={faPowerOff} title='Disconnect'/>
            </View>
        </SafeAreaView>
    );
}