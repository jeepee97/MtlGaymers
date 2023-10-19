import React from "react";
import { Pressable, View, StyleSheet, StatusBar} from "react-native";
import { Appbar } from "react-native-paper";

export const HeaderComponent = (props) => {
    return (
        <View>
            <Appbar>
                <Appbar.BackAction/>
                <Appbar.Content title={props.title}/>
                {props.showCalender ?? <Appbar.Action icon='calendar' size={40} color="black" onPress={() => {}}/> }
                {props.showAccount ?? <Appbar.Action icon='account' size={40} color="black" onPress={() => {}}/> }
            </Appbar>
        </View>
    );
}