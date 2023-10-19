import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { HeaderComponent } from "../../components/header/header.component";
import { Card, Text, useTheme } from "react-native-paper";
import { jukeboxStyle } from "./jukebox.style";
import { SongComponent } from "../../components/Jukebox/song.component";


export const JukeboxScreen = () => {
    const theme = useTheme()
    const style = jukeboxStyle(theme);

    const [songs, setSongs] = useState([
        {text: "song1", id: Math.random().toString()},
        {text: "song2", id: Math.random().toString()},
        {text: "song3", id: Math.random().toString()},
        {text: "song4", id: Math.random().toString()}
    ]);

    return (
        <SafeAreaView style={style.AndroidSafeArea}>
            <HeaderComponent title="Jukebox" showCalender={false} showAccount={false}/>
            <View style={style.view}>
                <FlatList
                    data={songs}
                    keyExtractor={(item, index) => {return item.id;}}
                    renderItem={(itemData) => {return(
                        <SongComponent title={itemData.item.text}/>
                    )} }
                />
            </View>
        </SafeAreaView>
    );
}